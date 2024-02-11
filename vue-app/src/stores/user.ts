import axiosInstance from "@/axios";
import { acceptHMRUpdate, defineStore } from "pinia";
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
import type { AxiosResponse } from "axios";

type LoginUser = AxiosResponse<ApiResponse<User>>;

type RegisterUser = AxiosResponse<
  ApiResponse<User> & {
    token: string;
  }
>;

type PostPayload = {
  email: string;
  password: string;
};

type PostUrl = "/login" | "/register";

export const useUserStore = defineStore("user", () => {
  const router = useRouter();

  const user: Ref<User | null> = ref(null);
  const token: Ref<string | null> = ref(localStorage.getItem("TOKEN"));
  const hydrating = ref(false);
  const hydrated = ref(false);
  const isLoggingOut = ref(false);

  const hydrate = async () => {
    console.log("Hydrating user");
    if (hydrated.value) return;

    hydrating.value = true;
    user.value = await fetchUser()
      .catch((err) => {
        console.log("User is not logged in");
        if (err.response.status == 401) {
          dehydrate();
          router.push("/login");
        }
        return null;
      })
      .finally(() => {
        hydrating.value = false;
        hydrated.value = true;
      });
  };

  const dehydrate = () => {
    console.log("Dehydrating user");
    localStorage.removeItem("TOKEN");
    user.value = null;
    token.value = null;
    hydrated.value = false;
    hydrating.value = false;
    isLoggingOut.value = false;
  };

  const fetchUser = async () => {
    return await axiosInstance
      .get("/user")
      .then((res: LoginUser) => res.data.data);
  };

  const setToken = (_token: string) => {
    localStorage.setItem("TOKEN", _token);
    token.value = _token;
  };
  const post = async (_user: PostPayload, url: PostUrl = "/login") => {
    return axiosInstance.post(url, _user).then((res: RegisterUser) => {
      setToken(res.data.token);
      user.value = res.data.data;
    });
  };

  const logout = async () => {
    isLoggingOut.value = true;
    return axiosInstance.post("/logout").finally(() => {
      dehydrate();
      router.push({ name: "Login" });
    });
  };

  return {
    user,
    token,
    hydrating,
    hydrated,
    isLoggingOut,

    hydrate,
    dehydrate,
    fetchUser,
    post,
    logout,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

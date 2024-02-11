import { reactive } from "vue";

export const useModal = () => {
  const modals = reactive({ create: false, update: false, delete: false });

  const open = (modal: keyof typeof modals) => {
    modals[modal] = true;
  };

  const close = (modal: keyof typeof modals) => {
    modals[modal] = false;
  };

  const resetModals = () => {
    for (const modal in modals) {
      modals[modal as keyof typeof modals] = false;
    }
  };

  return {
    modals,
    open,
    close,
    resetModals,
  };
};

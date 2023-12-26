<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\GeneralText
 *
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralText newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralText newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralText query()
 */
	class GeneralText extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\GeneralTextQuestion
 *
 * @property int $id
 * @property string $text_type
 * @property int|null $min
 * @property int|null $max
 * @property string|null $format
 * @property string|null $error_message
 * @property string|null $placeholder
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\GeneralTextQuestionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion query()
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion whereErrorMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion whereFormat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion whereMax($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion whereMin($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion wherePlaceholder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion whereTextType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GeneralTextQuestion whereUpdatedAt($value)
 */
	class GeneralTextQuestion extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\MultipleChoiceQuestion
 *
 * @property int $id
 * @property \Illuminate\Database\Eloquent\Casts\AsCollection $choices
 * @property int $randomize
 * @property int $vertical_display
 * @property int $multiple_answers
 * @property int $min_answers
 * @property int $max_answers
 * @property int $hide_question_number
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\MultipleChoiceQuestionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion query()
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion whereChoices($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion whereHideQuestionNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion whereMaxAnswers($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion whereMinAnswers($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion whereMultipleAnswers($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion whereRandomize($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MultipleChoiceQuestion whereVerticalDisplay($value)
 */
	class MultipleChoiceQuestion extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\OpinionScaleQuestion
 *
 * @property int $id
 * @property int $steps
 * @property \Illuminate\Database\Eloquent\Casts\AsCollection $labels
 * @property int $start_at_zero
 * @property int $hide_question_number
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\OpinionScaleQuestionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|OpinionScaleQuestion newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OpinionScaleQuestion newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OpinionScaleQuestion query()
 * @method static \Illuminate\Database\Eloquent\Builder|OpinionScaleQuestion whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OpinionScaleQuestion whereHideQuestionNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OpinionScaleQuestion whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OpinionScaleQuestion whereLabels($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OpinionScaleQuestion whereStartAtZero($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OpinionScaleQuestion whereSteps($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OpinionScaleQuestion whereUpdatedAt($value)
 */
	class OpinionScaleQuestion extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\PictureChoiceQuestion
 *
 * @property int $id
 * @property \Illuminate\Database\Eloquent\Casts\AsCollection $choices
 * @property int $randomize
 * @property int $vertical_display
 * @property int $multiple_answers
 * @property int $min_answers
 * @property int $max_answers
 * @property int $hide_question_number
 * @property int $double_display_size
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\PictureChoiceQuestionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion query()
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion whereChoices($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion whereDoubleDisplaySize($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion whereHideQuestionNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion whereMaxAnswers($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion whereMinAnswers($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion whereMultipleAnswers($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion whereRandomize($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PictureChoiceQuestion whereVerticalDisplay($value)
 */
	class PictureChoiceQuestion extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Question
 *
 * @property int $id
 * @property string $html_label
 * @property string|null $html_description
 * @property string|null $attachment
 * @property string $required
 * @property string $questionable_type
 * @property int $questionable_id
 * @property int $survey_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $questionable
 * @property-read \App\Models\Survey $survey
 * @method static \Database\Factories\QuestionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Question newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Question newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Question query()
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereAttachment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereHtmlDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereHtmlLabel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereQuestionableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereQuestionableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereRequired($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereSurveyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereUpdatedAt($value)
 */
	class Question extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\RatingQuestion
 *
 * @property int $id
 * @property int $rating_type
 * @property int $rating_value
 * @property int $hide_question_number
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\RatingQuestionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|RatingQuestion newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RatingQuestion newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RatingQuestion query()
 * @method static \Illuminate\Database\Eloquent\Builder|RatingQuestion whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RatingQuestion whereHideQuestionNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RatingQuestion whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RatingQuestion whereRatingType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RatingQuestion whereRatingValue($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RatingQuestion whereUpdatedAt($value)
 */
	class RatingQuestion extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Survey
 *
 * @property int $id
 * @property string $name
 * @property int $workspace_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Question> $questions
 * @property-read int|null $questions_count
 * @property-read \App\Models\Workspace $workspace
 * @method static \Database\Factories\SurveyFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Survey newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Survey newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Survey query()
 * @method static \Illuminate\Database\Eloquent\Builder|Survey whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Survey whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Survey whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Survey whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Survey whereWorkspaceId($value)
 */
	class Survey extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property Workspace[] $workspaces
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property mixed $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @property-read int|null $workspaces_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\WelcomeQuestion
 *
 * @property int $id
 * @property string $button_text
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Question|null $question
 * @method static \Database\Factories\WelcomeQuestionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|WelcomeQuestion newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WelcomeQuestion newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WelcomeQuestion query()
 * @method static \Illuminate\Database\Eloquent\Builder|WelcomeQuestion whereButtonText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WelcomeQuestion whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WelcomeQuestion whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WelcomeQuestion whereUpdatedAt($value)
 */
	class WelcomeQuestion extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Workspace
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Survey> $surveys
 * @property-read int|null $surveys_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Database\Factories\WorkspaceFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace query()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereUpdatedAt($value)
 */
	class Workspace extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\WorkspaceMember
 *
 * @property int $id
 * @property int $workspace_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\WorkspaceMemberFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceMember newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceMember newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceMember query()
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceMember whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceMember whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceMember whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceMember whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceMember whereWorkspaceId($value)
 */
	class WorkspaceMember extends \Eloquent {}
}


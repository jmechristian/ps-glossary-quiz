/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateLessonSource = /* GraphQL */ `subscription OnCreateLessonSource(
  $filter: ModelSubscriptionLessonSourceFilterInput
) {
  onCreateLessonSource(filter: $filter) {
    id
    name
    link
    position
    createdAt
    updatedAt
    lessonSourcesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLessonSourceSubscriptionVariables,
  APITypes.OnCreateLessonSourceSubscription
>;
export const onUpdateLessonSource = /* GraphQL */ `subscription OnUpdateLessonSource(
  $filter: ModelSubscriptionLessonSourceFilterInput
) {
  onUpdateLessonSource(filter: $filter) {
    id
    name
    link
    position
    createdAt
    updatedAt
    lessonSourcesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLessonSourceSubscriptionVariables,
  APITypes.OnUpdateLessonSourceSubscription
>;
export const onDeleteLessonSource = /* GraphQL */ `subscription OnDeleteLessonSource(
  $filter: ModelSubscriptionLessonSourceFilterInput
) {
  onDeleteLessonSource(filter: $filter) {
    id
    name
    link
    position
    createdAt
    updatedAt
    lessonSourcesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLessonSourceSubscriptionVariables,
  APITypes.OnDeleteLessonSourceSubscription
>;
export const onCreateLessonLink = /* GraphQL */ `subscription OnCreateLessonLink(
  $filter: ModelSubscriptionLessonLinkFilterInput
) {
  onCreateLessonLink(filter: $filter) {
    id
    name
    link
    createdAt
    updatedAt
    lessonLinksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLessonLinkSubscriptionVariables,
  APITypes.OnCreateLessonLinkSubscription
>;
export const onUpdateLessonLink = /* GraphQL */ `subscription OnUpdateLessonLink(
  $filter: ModelSubscriptionLessonLinkFilterInput
) {
  onUpdateLessonLink(filter: $filter) {
    id
    name
    link
    createdAt
    updatedAt
    lessonLinksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLessonLinkSubscriptionVariables,
  APITypes.OnUpdateLessonLinkSubscription
>;
export const onDeleteLessonLink = /* GraphQL */ `subscription OnDeleteLessonLink(
  $filter: ModelSubscriptionLessonLinkFilterInput
) {
  onDeleteLessonLink(filter: $filter) {
    id
    name
    link
    createdAt
    updatedAt
    lessonLinksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLessonLinkSubscriptionVariables,
  APITypes.OnDeleteLessonLinkSubscription
>;
export const onCreateTags = /* GraphQL */ `subscription OnCreateTags($filter: ModelSubscriptionTagsFilterInput) {
  onCreateTags(filter: $filter) {
    id
    tag
    lesson {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTagsSubscriptionVariables,
  APITypes.OnCreateTagsSubscription
>;
export const onUpdateTags = /* GraphQL */ `subscription OnUpdateTags($filter: ModelSubscriptionTagsFilterInput) {
  onUpdateTags(filter: $filter) {
    id
    tag
    lesson {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTagsSubscriptionVariables,
  APITypes.OnUpdateTagsSubscription
>;
export const onDeleteTags = /* GraphQL */ `subscription OnDeleteTags($filter: ModelSubscriptionTagsFilterInput) {
  onDeleteTags(filter: $filter) {
    id
    tag
    lesson {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTagsSubscriptionVariables,
  APITypes.OnDeleteTagsSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
    id
    name
    value
    certificates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
    id
    name
    value
    certificates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
    id
    name
    value
    certificates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateCertificate = /* GraphQL */ `subscription OnCreateCertificate(
  $filter: ModelSubscriptionCertificateFilterInput
) {
  onCreateCertificate(filter: $filter) {
    id
    slug
    title
    title_callout_1
    title_callout_2
    title_text
    title_button_1_text
    title_button_1_link
    title_button_2_text
    title_button_2_link
    title_image
    courses {
      nextToken
      __typename
    }
    whoText
    courses_total
    hours_total
    ceus_total
    brochure_link
    video
    price_full
    price_monthly
    price_features
    lmsLink
    demoLink
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCertificateSubscriptionVariables,
  APITypes.OnCreateCertificateSubscription
>;
export const onUpdateCertificate = /* GraphQL */ `subscription OnUpdateCertificate(
  $filter: ModelSubscriptionCertificateFilterInput
) {
  onUpdateCertificate(filter: $filter) {
    id
    slug
    title
    title_callout_1
    title_callout_2
    title_text
    title_button_1_text
    title_button_1_link
    title_button_2_text
    title_button_2_link
    title_image
    courses {
      nextToken
      __typename
    }
    whoText
    courses_total
    hours_total
    ceus_total
    brochure_link
    video
    price_full
    price_monthly
    price_features
    lmsLink
    demoLink
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCertificateSubscriptionVariables,
  APITypes.OnUpdateCertificateSubscription
>;
export const onDeleteCertificate = /* GraphQL */ `subscription OnDeleteCertificate(
  $filter: ModelSubscriptionCertificateFilterInput
) {
  onDeleteCertificate(filter: $filter) {
    id
    slug
    title
    title_callout_1
    title_callout_2
    title_text
    title_button_1_text
    title_button_1_link
    title_button_2_text
    title_button_2_link
    title_image
    courses {
      nextToken
      __typename
    }
    whoText
    courses_total
    hours_total
    ceus_total
    brochure_link
    video
    price_full
    price_monthly
    price_features
    lmsLink
    demoLink
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCertificateSubscriptionVariables,
  APITypes.OnDeleteCertificateSubscription
>;
export const onCreateCertificateObject = /* GraphQL */ `subscription OnCreateCertificateObject(
  $filter: ModelSubscriptionCertificateObjectFilterInput
) {
  onCreateCertificateObject(filter: $filter) {
    id
    courseId
    title
    description
    seoImage
    hours
    courses
    video
    price
    link
    applicationLink
    callout
    purchaseLink
    categoryArray
    abbreviation
    category {
      nextToken
      __typename
    }
    whereText
    whatText
    howText
    deadline
    subscriptionLink
    subscriptionPrice
    sessions {
      nextToken
      __typename
    }
    status
    displayOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCertificateObjectSubscriptionVariables,
  APITypes.OnCreateCertificateObjectSubscription
>;
export const onUpdateCertificateObject = /* GraphQL */ `subscription OnUpdateCertificateObject(
  $filter: ModelSubscriptionCertificateObjectFilterInput
) {
  onUpdateCertificateObject(filter: $filter) {
    id
    courseId
    title
    description
    seoImage
    hours
    courses
    video
    price
    link
    applicationLink
    callout
    purchaseLink
    categoryArray
    abbreviation
    category {
      nextToken
      __typename
    }
    whereText
    whatText
    howText
    deadline
    subscriptionLink
    subscriptionPrice
    sessions {
      nextToken
      __typename
    }
    status
    displayOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCertificateObjectSubscriptionVariables,
  APITypes.OnUpdateCertificateObjectSubscription
>;
export const onDeleteCertificateObject = /* GraphQL */ `subscription OnDeleteCertificateObject(
  $filter: ModelSubscriptionCertificateObjectFilterInput
) {
  onDeleteCertificateObject(filter: $filter) {
    id
    courseId
    title
    description
    seoImage
    hours
    courses
    video
    price
    link
    applicationLink
    callout
    purchaseLink
    categoryArray
    abbreviation
    category {
      nextToken
      __typename
    }
    whereText
    whatText
    howText
    deadline
    subscriptionLink
    subscriptionPrice
    sessions {
      nextToken
      __typename
    }
    status
    displayOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCertificateObjectSubscriptionVariables,
  APITypes.OnDeleteCertificateObjectSubscription
>;
export const onCreateCourse = /* GraphQL */ `subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onCreateCourse(filter: $filter) {
    id
    slug
    category
    title
    subhead
    media
    video
    hour
    lessons
    videos
    price
    articles {
      nextToken
      __typename
    }
    certificate {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCourseSubscriptionVariables,
  APITypes.OnCreateCourseSubscription
>;
export const onUpdateCourse = /* GraphQL */ `subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onUpdateCourse(filter: $filter) {
    id
    slug
    category
    title
    subhead
    media
    video
    hour
    lessons
    videos
    price
    articles {
      nextToken
      __typename
    }
    certificate {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSubscriptionVariables,
  APITypes.OnUpdateCourseSubscription
>;
export const onDeleteCourse = /* GraphQL */ `subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
  onDeleteCourse(filter: $filter) {
    id
    slug
    category
    title
    subhead
    media
    video
    hour
    lessons
    videos
    price
    articles {
      nextToken
      __typename
    }
    certificate {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSubscriptionVariables,
  APITypes.OnDeleteCourseSubscription
>;
export const onCreateLesson = /* GraphQL */ `subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
  onCreateLesson(filter: $filter) {
    id
    slug
    title
    subhead
    type
    media
    mediaType
    slides
    seoImage
    content
    sources {
      nextToken
      __typename
    }
    links {
      nextToken
      __typename
    }
    tags {
      nextToken
      __typename
    }
    objectives
    actionCTA
    actionSubhead
    actionLink
    actionLinkTitle
    actionExample
    author
    status
    related
    featured
    backdate
    createdBy
    lastEditedBy
    videoLink
    screengrab
    analysis {
      id
      wordCount
      readingTime
      quizQuestion
      quizOptions
      quizCorrectAnswer
      lessonId
      createdAt
      updatedAt
      __typename
    }
    usersCompleted {
      nextToken
      __typename
    }
    learningPaths {
      nextToken
      __typename
    }
    seoDescription
    seoKeywords
    seoTitle
    seoUrl
    seoRobots
    seoFollow
    createdAt
    updatedAt
    lessonAnalysisId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLessonSubscriptionVariables,
  APITypes.OnCreateLessonSubscription
>;
export const onUpdateLesson = /* GraphQL */ `subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
  onUpdateLesson(filter: $filter) {
    id
    slug
    title
    subhead
    type
    media
    mediaType
    slides
    seoImage
    content
    sources {
      nextToken
      __typename
    }
    links {
      nextToken
      __typename
    }
    tags {
      nextToken
      __typename
    }
    objectives
    actionCTA
    actionSubhead
    actionLink
    actionLinkTitle
    actionExample
    author
    status
    related
    featured
    backdate
    createdBy
    lastEditedBy
    videoLink
    screengrab
    analysis {
      id
      wordCount
      readingTime
      quizQuestion
      quizOptions
      quizCorrectAnswer
      lessonId
      createdAt
      updatedAt
      __typename
    }
    usersCompleted {
      nextToken
      __typename
    }
    learningPaths {
      nextToken
      __typename
    }
    seoDescription
    seoKeywords
    seoTitle
    seoUrl
    seoRobots
    seoFollow
    createdAt
    updatedAt
    lessonAnalysisId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLessonSubscriptionVariables,
  APITypes.OnUpdateLessonSubscription
>;
export const onDeleteLesson = /* GraphQL */ `subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
  onDeleteLesson(filter: $filter) {
    id
    slug
    title
    subhead
    type
    media
    mediaType
    slides
    seoImage
    content
    sources {
      nextToken
      __typename
    }
    links {
      nextToken
      __typename
    }
    tags {
      nextToken
      __typename
    }
    objectives
    actionCTA
    actionSubhead
    actionLink
    actionLinkTitle
    actionExample
    author
    status
    related
    featured
    backdate
    createdBy
    lastEditedBy
    videoLink
    screengrab
    analysis {
      id
      wordCount
      readingTime
      quizQuestion
      quizOptions
      quizCorrectAnswer
      lessonId
      createdAt
      updatedAt
      __typename
    }
    usersCompleted {
      nextToken
      __typename
    }
    learningPaths {
      nextToken
      __typename
    }
    seoDescription
    seoKeywords
    seoTitle
    seoUrl
    seoRobots
    seoFollow
    createdAt
    updatedAt
    lessonAnalysisId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLessonSubscriptionVariables,
  APITypes.OnDeleteLessonSubscription
>;
export const onCreateSeoDocument = /* GraphQL */ `subscription OnCreateSeoDocument(
  $filter: ModelSubscriptionSeoDocumentFilterInput
) {
  onCreateSeoDocument(filter: $filter) {
    id
    contentType
    slugOrPath
    metaJson
    jsonLd
    updatedBy
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSeoDocumentSubscriptionVariables,
  APITypes.OnCreateSeoDocumentSubscription
>;
export const onUpdateSeoDocument = /* GraphQL */ `subscription OnUpdateSeoDocument(
  $filter: ModelSubscriptionSeoDocumentFilterInput
) {
  onUpdateSeoDocument(filter: $filter) {
    id
    contentType
    slugOrPath
    metaJson
    jsonLd
    updatedBy
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSeoDocumentSubscriptionVariables,
  APITypes.OnUpdateSeoDocumentSubscription
>;
export const onDeleteSeoDocument = /* GraphQL */ `subscription OnDeleteSeoDocument(
  $filter: ModelSubscriptionSeoDocumentFilterInput
) {
  onDeleteSeoDocument(filter: $filter) {
    id
    contentType
    slugOrPath
    metaJson
    jsonLd
    updatedBy
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSeoDocumentSubscriptionVariables,
  APITypes.OnDeleteSeoDocumentSubscription
>;
export const onCreateAuthor = /* GraphQL */ `subscription OnCreateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onCreateAuthor(filter: $filter) {
    id
    name
    headshot
    linkedIn
    title
    company
    templates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAuthorSubscriptionVariables,
  APITypes.OnCreateAuthorSubscription
>;
export const onUpdateAuthor = /* GraphQL */ `subscription OnUpdateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onUpdateAuthor(filter: $filter) {
    id
    name
    headshot
    linkedIn
    title
    company
    templates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAuthorSubscriptionVariables,
  APITypes.OnUpdateAuthorSubscription
>;
export const onDeleteAuthor = /* GraphQL */ `subscription OnDeleteAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onDeleteAuthor(filter: $filter) {
    id
    name
    headshot
    linkedIn
    title
    company
    templates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAuthorSubscriptionVariables,
  APITypes.OnDeleteAuthorSubscription
>;
export const onCreateBlog = /* GraphQL */ `subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onCreateBlog(filter: $filter) {
    id
    slug
    title
    media
    content
    author
    tags
    date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBlogSubscriptionVariables,
  APITypes.OnCreateBlogSubscription
>;
export const onUpdateBlog = /* GraphQL */ `subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onUpdateBlog(filter: $filter) {
    id
    slug
    title
    media
    content
    author
    tags
    date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBlogSubscriptionVariables,
  APITypes.OnUpdateBlogSubscription
>;
export const onDeleteBlog = /* GraphQL */ `subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
  onDeleteBlog(filter: $filter) {
    id
    slug
    title
    media
    content
    author
    tags
    date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBlogSubscriptionVariables,
  APITypes.OnDeleteBlogSubscription
>;
export const onCreateArticle = /* GraphQL */ `subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onCreateArticle(filter: $filter) {
    id
    slug
    title
    subhead
    media
    seoImage
    content
    tags
    relatedCourses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateArticleSubscriptionVariables,
  APITypes.OnCreateArticleSubscription
>;
export const onUpdateArticle = /* GraphQL */ `subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onUpdateArticle(filter: $filter) {
    id
    slug
    title
    subhead
    media
    seoImage
    content
    tags
    relatedCourses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateArticleSubscriptionVariables,
  APITypes.OnUpdateArticleSubscription
>;
export const onDeleteArticle = /* GraphQL */ `subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
  onDeleteArticle(filter: $filter) {
    id
    slug
    title
    subhead
    media
    seoImage
    content
    tags
    relatedCourses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteArticleSubscriptionVariables,
  APITypes.OnDeleteArticleSubscription
>;
export const onCreateDayInLifeItem = /* GraphQL */ `subscription OnCreateDayInLifeItem(
  $filter: ModelSubscriptionDayInLifeItemFilterInput
) {
  onCreateDayInLifeItem(filter: $filter) {
    id
    name
    desc
    icon
    createdAt
    updatedAt
    careerDayInLifeId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDayInLifeItemSubscriptionVariables,
  APITypes.OnCreateDayInLifeItemSubscription
>;
export const onUpdateDayInLifeItem = /* GraphQL */ `subscription OnUpdateDayInLifeItem(
  $filter: ModelSubscriptionDayInLifeItemFilterInput
) {
  onUpdateDayInLifeItem(filter: $filter) {
    id
    name
    desc
    icon
    createdAt
    updatedAt
    careerDayInLifeId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDayInLifeItemSubscriptionVariables,
  APITypes.OnUpdateDayInLifeItemSubscription
>;
export const onDeleteDayInLifeItem = /* GraphQL */ `subscription OnDeleteDayInLifeItem(
  $filter: ModelSubscriptionDayInLifeItemFilterInput
) {
  onDeleteDayInLifeItem(filter: $filter) {
    id
    name
    desc
    icon
    createdAt
    updatedAt
    careerDayInLifeId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDayInLifeItemSubscriptionVariables,
  APITypes.OnDeleteDayInLifeItemSubscription
>;
export const onCreateCareer = /* GraphQL */ `subscription OnCreateCareer($filter: ModelSubscriptionCareerFilterInput) {
  onCreateCareer(filter: $filter) {
    id
    slug
    title
    altName
    subhead
    media
    dayInLife {
      nextToken
      __typename
    }
    cmpmCopy
    cpsCopy
    apcCopy
    coreCopy
    electiveCopy
    freeCopy
    beverageCopy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCareerSubscriptionVariables,
  APITypes.OnCreateCareerSubscription
>;
export const onUpdateCareer = /* GraphQL */ `subscription OnUpdateCareer($filter: ModelSubscriptionCareerFilterInput) {
  onUpdateCareer(filter: $filter) {
    id
    slug
    title
    altName
    subhead
    media
    dayInLife {
      nextToken
      __typename
    }
    cmpmCopy
    cpsCopy
    apcCopy
    coreCopy
    electiveCopy
    freeCopy
    beverageCopy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCareerSubscriptionVariables,
  APITypes.OnUpdateCareerSubscription
>;
export const onDeleteCareer = /* GraphQL */ `subscription OnDeleteCareer($filter: ModelSubscriptionCareerFilterInput) {
  onDeleteCareer(filter: $filter) {
    id
    slug
    title
    altName
    subhead
    media
    dayInLife {
      nextToken
      __typename
    }
    cmpmCopy
    cpsCopy
    apcCopy
    coreCopy
    electiveCopy
    freeCopy
    beverageCopy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCareerSubscriptionVariables,
  APITypes.OnDeleteCareerSubscription
>;
export const onCreateAPS2025MediaItem = /* GraphQL */ `subscription OnCreateAPS2025MediaItem(
  $filter: ModelSubscriptionAPS2025MediaItemFilterInput
) {
  onCreateAPS2025MediaItem(filter: $filter) {
    id
    title
    url
    type
    caption
    uploadedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAPS2025MediaItemSubscriptionVariables,
  APITypes.OnCreateAPS2025MediaItemSubscription
>;
export const onUpdateAPS2025MediaItem = /* GraphQL */ `subscription OnUpdateAPS2025MediaItem(
  $filter: ModelSubscriptionAPS2025MediaItemFilterInput
) {
  onUpdateAPS2025MediaItem(filter: $filter) {
    id
    title
    url
    type
    caption
    uploadedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAPS2025MediaItemSubscriptionVariables,
  APITypes.OnUpdateAPS2025MediaItemSubscription
>;
export const onDeleteAPS2025MediaItem = /* GraphQL */ `subscription OnDeleteAPS2025MediaItem(
  $filter: ModelSubscriptionAPS2025MediaItemFilterInput
) {
  onDeleteAPS2025MediaItem(filter: $filter) {
    id
    title
    url
    type
    caption
    uploadedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAPS2025MediaItemSubscriptionVariables,
  APITypes.OnDeleteAPS2025MediaItemSubscription
>;
export const onCreateCompany = /* GraphQL */ `subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onCreateCompany(filter: $filter) {
    id
    name
    Employees {
      nextToken
      __typename
    }
    website
    email
    phone
    street_1
    street_2
    city
    state
    zip
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCompanySubscriptionVariables,
  APITypes.OnCreateCompanySubscription
>;
export const onUpdateCompany = /* GraphQL */ `subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onUpdateCompany(filter: $filter) {
    id
    name
    Employees {
      nextToken
      __typename
    }
    website
    email
    phone
    street_1
    street_2
    city
    state
    zip
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCompanySubscriptionVariables,
  APITypes.OnUpdateCompanySubscription
>;
export const onDeleteCompany = /* GraphQL */ `subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onDeleteCompany(filter: $filter) {
    id
    name
    Employees {
      nextToken
      __typename
    }
    website
    email
    phone
    street_1
    street_2
    city
    state
    zip
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCompanySubscriptionVariables,
  APITypes.OnDeleteCompanySubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    thinkificId
    name
    title
    company
    email
    office
    bio
    interests
    goals
    cell
    picture
    linkedin
    location
    companyID
    cmpmFormID
    cmpmForm {
      id
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      birthYear
      optOut
      paymentConfirmation
      status
      createdOn
      updatedOn
      cMPMFormUserId
      __typename
    }
    cpsFormID
    cpsForm {
      id
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      birthYear
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cpsGoals
      paymentType
      moreAboutYou
      elective
      optOut
      paymentConfirmation
      status
      createdOn
      updatedOn
      cPSFormUserId
      __typename
    }
    savedCourses
    savedLessons
    savedArticles
    source
    achievements {
      nextToken
      __typename
    }
    onboardingComplete
    onboardingCompleteDate
    totalXp
    thinkificXp
    psXp
    level
    xpToNextLevel
    lastLogin
    dailyStreak
    cohorts {
      nextToken
      __typename
    }
    allAccess
    allAccessStartDate
    allAccessEndDate
    lessonsCompleted {
      nextToken
      __typename
    }
    learningPathProgress {
      nextToken
      __typename
    }
    userXp {
      id
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      progress
      createdAt
      updatedAt
      userXpUserId
      __typename
    }
    wishlist {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    tourCompleted
    orders {
      nextToken
      __typename
    }
    icpfCmpmFormID
    icpfCmpmForm {
      id
      firstName
      lastName
      email
      age
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      school
      schoolType
      studying
      credential
      credentialProgress
      credentialYear
      fullTime
      organizations
      transcript
      resume
      corrugatedImpact
      opportunities
      moreAboutYou
      optOut
      birthYear
      paymentConfirmation
      contactConsent
      status
      createdOn
      updatedOn
      icpfCmpmFormUserId
      __typename
    }
    pgsfFormID
    pgsfForm {
      id
      firstName
      lastName
      email
      age
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      certApplying
      r2rconsent
      referral
      payment
      yearGoals
      careerGoals
      openToInternships
      school
      schoolType
      studying
      credential
      credentialProgress
      credentialYear
      fullTime
      organizations
      transcript
      resume
      corrugatedImpact
      opportunities
      moreAboutYou
      whyinterested
      optOut
      birthYear
      paymentConfirmation
      impact
      status
      funding
      createdOn
      updatedOn
      pgsfFormUserId
      __typename
    }
    createdAt
    updatedAt
    userUserXpId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    thinkificId
    name
    title
    company
    email
    office
    bio
    interests
    goals
    cell
    picture
    linkedin
    location
    companyID
    cmpmFormID
    cmpmForm {
      id
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      birthYear
      optOut
      paymentConfirmation
      status
      createdOn
      updatedOn
      cMPMFormUserId
      __typename
    }
    cpsFormID
    cpsForm {
      id
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      birthYear
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cpsGoals
      paymentType
      moreAboutYou
      elective
      optOut
      paymentConfirmation
      status
      createdOn
      updatedOn
      cPSFormUserId
      __typename
    }
    savedCourses
    savedLessons
    savedArticles
    source
    achievements {
      nextToken
      __typename
    }
    onboardingComplete
    onboardingCompleteDate
    totalXp
    thinkificXp
    psXp
    level
    xpToNextLevel
    lastLogin
    dailyStreak
    cohorts {
      nextToken
      __typename
    }
    allAccess
    allAccessStartDate
    allAccessEndDate
    lessonsCompleted {
      nextToken
      __typename
    }
    learningPathProgress {
      nextToken
      __typename
    }
    userXp {
      id
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      progress
      createdAt
      updatedAt
      userXpUserId
      __typename
    }
    wishlist {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    tourCompleted
    orders {
      nextToken
      __typename
    }
    icpfCmpmFormID
    icpfCmpmForm {
      id
      firstName
      lastName
      email
      age
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      school
      schoolType
      studying
      credential
      credentialProgress
      credentialYear
      fullTime
      organizations
      transcript
      resume
      corrugatedImpact
      opportunities
      moreAboutYou
      optOut
      birthYear
      paymentConfirmation
      contactConsent
      status
      createdOn
      updatedOn
      icpfCmpmFormUserId
      __typename
    }
    pgsfFormID
    pgsfForm {
      id
      firstName
      lastName
      email
      age
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      certApplying
      r2rconsent
      referral
      payment
      yearGoals
      careerGoals
      openToInternships
      school
      schoolType
      studying
      credential
      credentialProgress
      credentialYear
      fullTime
      organizations
      transcript
      resume
      corrugatedImpact
      opportunities
      moreAboutYou
      whyinterested
      optOut
      birthYear
      paymentConfirmation
      impact
      status
      funding
      createdOn
      updatedOn
      pgsfFormUserId
      __typename
    }
    createdAt
    updatedAt
    userUserXpId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    thinkificId
    name
    title
    company
    email
    office
    bio
    interests
    goals
    cell
    picture
    linkedin
    location
    companyID
    cmpmFormID
    cmpmForm {
      id
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      birthYear
      optOut
      paymentConfirmation
      status
      createdOn
      updatedOn
      cMPMFormUserId
      __typename
    }
    cpsFormID
    cpsForm {
      id
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      birthYear
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cpsGoals
      paymentType
      moreAboutYou
      elective
      optOut
      paymentConfirmation
      status
      createdOn
      updatedOn
      cPSFormUserId
      __typename
    }
    savedCourses
    savedLessons
    savedArticles
    source
    achievements {
      nextToken
      __typename
    }
    onboardingComplete
    onboardingCompleteDate
    totalXp
    thinkificXp
    psXp
    level
    xpToNextLevel
    lastLogin
    dailyStreak
    cohorts {
      nextToken
      __typename
    }
    allAccess
    allAccessStartDate
    allAccessEndDate
    lessonsCompleted {
      nextToken
      __typename
    }
    learningPathProgress {
      nextToken
      __typename
    }
    userXp {
      id
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      progress
      createdAt
      updatedAt
      userXpUserId
      __typename
    }
    wishlist {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    tourCompleted
    orders {
      nextToken
      __typename
    }
    icpfCmpmFormID
    icpfCmpmForm {
      id
      firstName
      lastName
      email
      age
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      school
      schoolType
      studying
      credential
      credentialProgress
      credentialYear
      fullTime
      organizations
      transcript
      resume
      corrugatedImpact
      opportunities
      moreAboutYou
      optOut
      birthYear
      paymentConfirmation
      contactConsent
      status
      createdOn
      updatedOn
      icpfCmpmFormUserId
      __typename
    }
    pgsfFormID
    pgsfForm {
      id
      firstName
      lastName
      email
      age
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      certApplying
      r2rconsent
      referral
      payment
      yearGoals
      careerGoals
      openToInternships
      school
      schoolType
      studying
      credential
      credentialProgress
      credentialYear
      fullTime
      organizations
      transcript
      resume
      corrugatedImpact
      opportunities
      moreAboutYou
      whyinterested
      optOut
      birthYear
      paymentConfirmation
      impact
      status
      funding
      createdOn
      updatedOn
      pgsfFormUserId
      __typename
    }
    createdAt
    updatedAt
    userUserXpId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserXp = /* GraphQL */ `subscription OnCreateUserXp($filter: ModelSubscriptionUserXpFilterInput) {
  onCreateUserXp(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    totalXp
    thinkificXp
    psXp
    level
    xpToNextLevel
    lastLogin
    dailyStreak
    progress
    createdAt
    updatedAt
    userXpUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserXpSubscriptionVariables,
  APITypes.OnCreateUserXpSubscription
>;
export const onUpdateUserXp = /* GraphQL */ `subscription OnUpdateUserXp($filter: ModelSubscriptionUserXpFilterInput) {
  onUpdateUserXp(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    totalXp
    thinkificXp
    psXp
    level
    xpToNextLevel
    lastLogin
    dailyStreak
    progress
    createdAt
    updatedAt
    userXpUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserXpSubscriptionVariables,
  APITypes.OnUpdateUserXpSubscription
>;
export const onDeleteUserXp = /* GraphQL */ `subscription OnDeleteUserXp($filter: ModelSubscriptionUserXpFilterInput) {
  onDeleteUserXp(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    totalXp
    thinkificXp
    psXp
    level
    xpToNextLevel
    lastLogin
    dailyStreak
    progress
    createdAt
    updatedAt
    userXpUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserXpSubscriptionVariables,
  APITypes.OnDeleteUserXpSubscription
>;
export const onCreateCohort = /* GraphQL */ `subscription OnCreateCohort($filter: ModelSubscriptionCohortFilterInput) {
  onCreateCohort(filter: $filter) {
    id
    name
    startDate
    endDate
    deadline
    users {
      nextToken
      __typename
    }
    type
    instructor {
      id
      userId
      name
      image
      bio
      linkedIn
      company
      title
      createdAt
      updatedAt
      __typename
    }
    description
    link
    createdAt
    updatedAt
    instructorCohortsId
    cohortInstructorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCohortSubscriptionVariables,
  APITypes.OnCreateCohortSubscription
>;
export const onUpdateCohort = /* GraphQL */ `subscription OnUpdateCohort($filter: ModelSubscriptionCohortFilterInput) {
  onUpdateCohort(filter: $filter) {
    id
    name
    startDate
    endDate
    deadline
    users {
      nextToken
      __typename
    }
    type
    instructor {
      id
      userId
      name
      image
      bio
      linkedIn
      company
      title
      createdAt
      updatedAt
      __typename
    }
    description
    link
    createdAt
    updatedAt
    instructorCohortsId
    cohortInstructorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCohortSubscriptionVariables,
  APITypes.OnUpdateCohortSubscription
>;
export const onDeleteCohort = /* GraphQL */ `subscription OnDeleteCohort($filter: ModelSubscriptionCohortFilterInput) {
  onDeleteCohort(filter: $filter) {
    id
    name
    startDate
    endDate
    deadline
    users {
      nextToken
      __typename
    }
    type
    instructor {
      id
      userId
      name
      image
      bio
      linkedIn
      company
      title
      createdAt
      updatedAt
      __typename
    }
    description
    link
    createdAt
    updatedAt
    instructorCohortsId
    cohortInstructorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCohortSubscriptionVariables,
  APITypes.OnDeleteCohortSubscription
>;
export const onCreateLearningPath = /* GraphQL */ `subscription OnCreateLearningPath(
  $filter: ModelSubscriptionLearningPathFilterInput
) {
  onCreateLearningPath(filter: $filter) {
    id
    title
    description
    courses {
      nextToken
      __typename
    }
    lessons {
      nextToken
      __typename
    }
    userProgress {
      nextToken
      __typename
    }
    displayOrder
    hours
    slug
    status
    icon
    accredibleId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLearningPathSubscriptionVariables,
  APITypes.OnCreateLearningPathSubscription
>;
export const onUpdateLearningPath = /* GraphQL */ `subscription OnUpdateLearningPath(
  $filter: ModelSubscriptionLearningPathFilterInput
) {
  onUpdateLearningPath(filter: $filter) {
    id
    title
    description
    courses {
      nextToken
      __typename
    }
    lessons {
      nextToken
      __typename
    }
    userProgress {
      nextToken
      __typename
    }
    displayOrder
    hours
    slug
    status
    icon
    accredibleId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLearningPathSubscriptionVariables,
  APITypes.OnUpdateLearningPathSubscription
>;
export const onDeleteLearningPath = /* GraphQL */ `subscription OnDeleteLearningPath(
  $filter: ModelSubscriptionLearningPathFilterInput
) {
  onDeleteLearningPath(filter: $filter) {
    id
    title
    description
    courses {
      nextToken
      __typename
    }
    lessons {
      nextToken
      __typename
    }
    userProgress {
      nextToken
      __typename
    }
    displayOrder
    hours
    slug
    status
    icon
    accredibleId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLearningPathSubscriptionVariables,
  APITypes.OnDeleteLearningPathSubscription
>;
export const onCreateLearningPathProgress = /* GraphQL */ `subscription OnCreateLearningPathProgress(
  $filter: ModelSubscriptionLearningPathProgressFilterInput
) {
  onCreateLearningPathProgress(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    learningPath {
      id
      title
      description
      displayOrder
      hours
      slug
      status
      icon
      accredibleId
      createdAt
      updatedAt
      __typename
    }
    progress
    completedCourses
    completedLessons
    lastAccessedDate
    startDate
    completionDate
    status
    credential
    credentialDate
    createdAt
    updatedAt
    userLearningPathProgressId
    learningPathUserProgressId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLearningPathProgressSubscriptionVariables,
  APITypes.OnCreateLearningPathProgressSubscription
>;
export const onUpdateLearningPathProgress = /* GraphQL */ `subscription OnUpdateLearningPathProgress(
  $filter: ModelSubscriptionLearningPathProgressFilterInput
) {
  onUpdateLearningPathProgress(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    learningPath {
      id
      title
      description
      displayOrder
      hours
      slug
      status
      icon
      accredibleId
      createdAt
      updatedAt
      __typename
    }
    progress
    completedCourses
    completedLessons
    lastAccessedDate
    startDate
    completionDate
    status
    credential
    credentialDate
    createdAt
    updatedAt
    userLearningPathProgressId
    learningPathUserProgressId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLearningPathProgressSubscriptionVariables,
  APITypes.OnUpdateLearningPathProgressSubscription
>;
export const onDeleteLearningPathProgress = /* GraphQL */ `subscription OnDeleteLearningPathProgress(
  $filter: ModelSubscriptionLearningPathProgressFilterInput
) {
  onDeleteLearningPathProgress(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    learningPath {
      id
      title
      description
      displayOrder
      hours
      slug
      status
      icon
      accredibleId
      createdAt
      updatedAt
      __typename
    }
    progress
    completedCourses
    completedLessons
    lastAccessedDate
    startDate
    completionDate
    status
    credential
    credentialDate
    createdAt
    updatedAt
    userLearningPathProgressId
    learningPathUserProgressId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLearningPathProgressSubscriptionVariables,
  APITypes.OnDeleteLearningPathProgressSubscription
>;
export const onCreateLearningPathCourse = /* GraphQL */ `subscription OnCreateLearningPathCourse(
  $filter: ModelSubscriptionLearningPathCourseFilterInput
) {
  onCreateLearningPathCourse(filter: $filter) {
    id
    courseId
    course {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    learningPath {
      id
      title
      description
      displayOrder
      hours
      slug
      status
      icon
      accredibleId
      createdAt
      updatedAt
      __typename
    }
    order
    thinkificId
    createdAt
    updatedAt
    learningPathCoursesId
    lMSCourseLearningPathsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLearningPathCourseSubscriptionVariables,
  APITypes.OnCreateLearningPathCourseSubscription
>;
export const onUpdateLearningPathCourse = /* GraphQL */ `subscription OnUpdateLearningPathCourse(
  $filter: ModelSubscriptionLearningPathCourseFilterInput
) {
  onUpdateLearningPathCourse(filter: $filter) {
    id
    courseId
    course {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    learningPath {
      id
      title
      description
      displayOrder
      hours
      slug
      status
      icon
      accredibleId
      createdAt
      updatedAt
      __typename
    }
    order
    thinkificId
    createdAt
    updatedAt
    learningPathCoursesId
    lMSCourseLearningPathsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLearningPathCourseSubscriptionVariables,
  APITypes.OnUpdateLearningPathCourseSubscription
>;
export const onDeleteLearningPathCourse = /* GraphQL */ `subscription OnDeleteLearningPathCourse(
  $filter: ModelSubscriptionLearningPathCourseFilterInput
) {
  onDeleteLearningPathCourse(filter: $filter) {
    id
    courseId
    course {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    learningPath {
      id
      title
      description
      displayOrder
      hours
      slug
      status
      icon
      accredibleId
      createdAt
      updatedAt
      __typename
    }
    order
    thinkificId
    createdAt
    updatedAt
    learningPathCoursesId
    lMSCourseLearningPathsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLearningPathCourseSubscriptionVariables,
  APITypes.OnDeleteLearningPathCourseSubscription
>;
export const onCreateLearningPathLesson = /* GraphQL */ `subscription OnCreateLearningPathLesson(
  $filter: ModelSubscriptionLearningPathLessonFilterInput
) {
  onCreateLearningPathLesson(filter: $filter) {
    id
    lessonId
    lesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      screengrab
      seoDescription
      seoKeywords
      seoTitle
      seoUrl
      seoRobots
      seoFollow
      createdAt
      updatedAt
      lessonAnalysisId
      __typename
    }
    learningPath {
      id
      title
      description
      displayOrder
      hours
      slug
      status
      icon
      accredibleId
      createdAt
      updatedAt
      __typename
    }
    order
    createdAt
    updatedAt
    lessonLearningPathsId
    learningPathLessonsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLearningPathLessonSubscriptionVariables,
  APITypes.OnCreateLearningPathLessonSubscription
>;
export const onUpdateLearningPathLesson = /* GraphQL */ `subscription OnUpdateLearningPathLesson(
  $filter: ModelSubscriptionLearningPathLessonFilterInput
) {
  onUpdateLearningPathLesson(filter: $filter) {
    id
    lessonId
    lesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      screengrab
      seoDescription
      seoKeywords
      seoTitle
      seoUrl
      seoRobots
      seoFollow
      createdAt
      updatedAt
      lessonAnalysisId
      __typename
    }
    learningPath {
      id
      title
      description
      displayOrder
      hours
      slug
      status
      icon
      accredibleId
      createdAt
      updatedAt
      __typename
    }
    order
    createdAt
    updatedAt
    lessonLearningPathsId
    learningPathLessonsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLearningPathLessonSubscriptionVariables,
  APITypes.OnUpdateLearningPathLessonSubscription
>;
export const onDeleteLearningPathLesson = /* GraphQL */ `subscription OnDeleteLearningPathLesson(
  $filter: ModelSubscriptionLearningPathLessonFilterInput
) {
  onDeleteLearningPathLesson(filter: $filter) {
    id
    lessonId
    lesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      screengrab
      seoDescription
      seoKeywords
      seoTitle
      seoUrl
      seoRobots
      seoFollow
      createdAt
      updatedAt
      lessonAnalysisId
      __typename
    }
    learningPath {
      id
      title
      description
      displayOrder
      hours
      slug
      status
      icon
      accredibleId
      createdAt
      updatedAt
      __typename
    }
    order
    createdAt
    updatedAt
    lessonLearningPathsId
    learningPathLessonsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLearningPathLessonSubscriptionVariables,
  APITypes.OnDeleteLearningPathLessonSubscription
>;
export const onCreateCMPMSession = /* GraphQL */ `subscription OnCreateCMPMSession(
  $filter: ModelSubscriptionCMPMSessionFilterInput
) {
  onCreateCMPMSession(filter: $filter) {
    startDate
    endDate
    deadline
    title
    id
    createdAt
    updatedAt
    certificateObjectSessionsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCMPMSessionSubscriptionVariables,
  APITypes.OnCreateCMPMSessionSubscription
>;
export const onUpdateCMPMSession = /* GraphQL */ `subscription OnUpdateCMPMSession(
  $filter: ModelSubscriptionCMPMSessionFilterInput
) {
  onUpdateCMPMSession(filter: $filter) {
    startDate
    endDate
    deadline
    title
    id
    createdAt
    updatedAt
    certificateObjectSessionsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCMPMSessionSubscriptionVariables,
  APITypes.OnUpdateCMPMSessionSubscription
>;
export const onDeleteCMPMSession = /* GraphQL */ `subscription OnDeleteCMPMSession(
  $filter: ModelSubscriptionCMPMSessionFilterInput
) {
  onDeleteCMPMSession(filter: $filter) {
    startDate
    endDate
    deadline
    title
    id
    createdAt
    updatedAt
    certificateObjectSessionsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCMPMSessionSubscriptionVariables,
  APITypes.OnDeleteCMPMSessionSubscription
>;
export const onCreateCMPMForm = /* GraphQL */ `subscription OnCreateCMPMForm($filter: ModelSubscriptionCMPMFormFilterInput) {
  onCreateCMPMForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    phone
    streetAddress
    addressExtra
    city
    state
    country
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    sessionApplying
    referral
    payment
    yearGoals
    cmpmGoals
    moreAboutYou
    birthYear
    optOut
    paymentConfirmation
    status
    createdOn
    updatedOn
    cMPMFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCMPMFormSubscriptionVariables,
  APITypes.OnCreateCMPMFormSubscription
>;
export const onUpdateCMPMForm = /* GraphQL */ `subscription OnUpdateCMPMForm($filter: ModelSubscriptionCMPMFormFilterInput) {
  onUpdateCMPMForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    phone
    streetAddress
    addressExtra
    city
    state
    country
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    sessionApplying
    referral
    payment
    yearGoals
    cmpmGoals
    moreAboutYou
    birthYear
    optOut
    paymentConfirmation
    status
    createdOn
    updatedOn
    cMPMFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCMPMFormSubscriptionVariables,
  APITypes.OnUpdateCMPMFormSubscription
>;
export const onDeleteCMPMForm = /* GraphQL */ `subscription OnDeleteCMPMForm($filter: ModelSubscriptionCMPMFormFilterInput) {
  onDeleteCMPMForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    phone
    streetAddress
    addressExtra
    city
    state
    country
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    sessionApplying
    referral
    payment
    yearGoals
    cmpmGoals
    moreAboutYou
    birthYear
    optOut
    paymentConfirmation
    status
    createdOn
    updatedOn
    cMPMFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCMPMFormSubscriptionVariables,
  APITypes.OnDeleteCMPMFormSubscription
>;
export const onCreateIcpfCmpmForm = /* GraphQL */ `subscription OnCreateIcpfCmpmForm(
  $filter: ModelSubscriptionIcpfCmpmFormFilterInput
) {
  onCreateIcpfCmpmForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    age
    phone
    streetAddress
    addressExtra
    city
    state
    country
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    sessionApplying
    referral
    payment
    yearGoals
    cmpmGoals
    school
    schoolType
    studying
    credential
    credentialProgress
    credentialYear
    fullTime
    organizations
    transcript
    resume
    corrugatedImpact
    opportunities
    moreAboutYou
    optOut
    birthYear
    paymentConfirmation
    contactConsent
    status
    createdOn
    updatedOn
    icpfCmpmFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIcpfCmpmFormSubscriptionVariables,
  APITypes.OnCreateIcpfCmpmFormSubscription
>;
export const onUpdateIcpfCmpmForm = /* GraphQL */ `subscription OnUpdateIcpfCmpmForm(
  $filter: ModelSubscriptionIcpfCmpmFormFilterInput
) {
  onUpdateIcpfCmpmForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    age
    phone
    streetAddress
    addressExtra
    city
    state
    country
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    sessionApplying
    referral
    payment
    yearGoals
    cmpmGoals
    school
    schoolType
    studying
    credential
    credentialProgress
    credentialYear
    fullTime
    organizations
    transcript
    resume
    corrugatedImpact
    opportunities
    moreAboutYou
    optOut
    birthYear
    paymentConfirmation
    contactConsent
    status
    createdOn
    updatedOn
    icpfCmpmFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIcpfCmpmFormSubscriptionVariables,
  APITypes.OnUpdateIcpfCmpmFormSubscription
>;
export const onDeleteIcpfCmpmForm = /* GraphQL */ `subscription OnDeleteIcpfCmpmForm(
  $filter: ModelSubscriptionIcpfCmpmFormFilterInput
) {
  onDeleteIcpfCmpmForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    age
    phone
    streetAddress
    addressExtra
    city
    state
    country
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    sessionApplying
    referral
    payment
    yearGoals
    cmpmGoals
    school
    schoolType
    studying
    credential
    credentialProgress
    credentialYear
    fullTime
    organizations
    transcript
    resume
    corrugatedImpact
    opportunities
    moreAboutYou
    optOut
    birthYear
    paymentConfirmation
    contactConsent
    status
    createdOn
    updatedOn
    icpfCmpmFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIcpfCmpmFormSubscriptionVariables,
  APITypes.OnDeleteIcpfCmpmFormSubscription
>;
export const onCreatePgsfForm = /* GraphQL */ `subscription OnCreatePgsfForm($filter: ModelSubscriptionPgsfFormFilterInput) {
  onCreatePgsfForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    age
    phone
    streetAddress
    addressExtra
    city
    state
    country
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    certApplying
    r2rconsent
    referral
    payment
    yearGoals
    careerGoals
    openToInternships
    school
    schoolType
    studying
    credential
    credentialProgress
    credentialYear
    fullTime
    organizations
    transcript
    resume
    corrugatedImpact
    opportunities
    moreAboutYou
    whyinterested
    optOut
    birthYear
    paymentConfirmation
    impact
    status
    funding
    createdOn
    updatedOn
    pgsfFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePgsfFormSubscriptionVariables,
  APITypes.OnCreatePgsfFormSubscription
>;
export const onUpdatePgsfForm = /* GraphQL */ `subscription OnUpdatePgsfForm($filter: ModelSubscriptionPgsfFormFilterInput) {
  onUpdatePgsfForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    age
    phone
    streetAddress
    addressExtra
    city
    state
    country
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    certApplying
    r2rconsent
    referral
    payment
    yearGoals
    careerGoals
    openToInternships
    school
    schoolType
    studying
    credential
    credentialProgress
    credentialYear
    fullTime
    organizations
    transcript
    resume
    corrugatedImpact
    opportunities
    moreAboutYou
    whyinterested
    optOut
    birthYear
    paymentConfirmation
    impact
    status
    funding
    createdOn
    updatedOn
    pgsfFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePgsfFormSubscriptionVariables,
  APITypes.OnUpdatePgsfFormSubscription
>;
export const onDeletePgsfForm = /* GraphQL */ `subscription OnDeletePgsfForm($filter: ModelSubscriptionPgsfFormFilterInput) {
  onDeletePgsfForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    age
    phone
    streetAddress
    addressExtra
    city
    state
    country
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    certApplying
    r2rconsent
    referral
    payment
    yearGoals
    careerGoals
    openToInternships
    school
    schoolType
    studying
    credential
    credentialProgress
    credentialYear
    fullTime
    organizations
    transcript
    resume
    corrugatedImpact
    opportunities
    moreAboutYou
    whyinterested
    optOut
    birthYear
    paymentConfirmation
    impact
    status
    funding
    createdOn
    updatedOn
    pgsfFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePgsfFormSubscriptionVariables,
  APITypes.OnDeletePgsfFormSubscription
>;
export const onCreateCPSForm = /* GraphQL */ `subscription OnCreateCPSForm($filter: ModelSubscriptionCPSFormFilterInput) {
  onCreateCPSForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    phone
    streetAddress
    addressExtra
    city
    state
    country
    birthYear
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    sessionApplying
    referral
    payment
    yearGoals
    cpsGoals
    paymentType
    moreAboutYou
    elective
    optOut
    paymentConfirmation
    status
    createdOn
    updatedOn
    cPSFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCPSFormSubscriptionVariables,
  APITypes.OnCreateCPSFormSubscription
>;
export const onUpdateCPSForm = /* GraphQL */ `subscription OnUpdateCPSForm($filter: ModelSubscriptionCPSFormFilterInput) {
  onUpdateCPSForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    phone
    streetAddress
    addressExtra
    city
    state
    country
    birthYear
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    sessionApplying
    referral
    payment
    yearGoals
    cpsGoals
    paymentType
    moreAboutYou
    elective
    optOut
    paymentConfirmation
    status
    createdOn
    updatedOn
    cPSFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCPSFormSubscriptionVariables,
  APITypes.OnUpdateCPSFormSubscription
>;
export const onDeleteCPSForm = /* GraphQL */ `subscription OnDeleteCPSForm($filter: ModelSubscriptionCPSFormFilterInput) {
  onDeleteCPSForm(filter: $filter) {
    id
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    firstName
    lastName
    email
    phone
    streetAddress
    addressExtra
    city
    state
    country
    birthYear
    companyName
    companyTitle
    linkedin
    background
    whyPackaging
    areaOfInterest
    sessionApplying
    referral
    payment
    yearGoals
    cpsGoals
    paymentType
    moreAboutYou
    elective
    optOut
    paymentConfirmation
    status
    createdOn
    updatedOn
    cPSFormUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCPSFormSubscriptionVariables,
  APITypes.OnDeleteCPSFormSubscription
>;
export const onCreateAppStart = /* GraphQL */ `subscription OnCreateAppStart($filter: ModelSubscriptionAppStartFilterInput) {
  onCreateAppStart(filter: $filter) {
    firstName
    lastName
    email
    phone
    source
    sourceUrl
    id
    createdOn
    updatedOn
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAppStartSubscriptionVariables,
  APITypes.OnCreateAppStartSubscription
>;
export const onUpdateAppStart = /* GraphQL */ `subscription OnUpdateAppStart($filter: ModelSubscriptionAppStartFilterInput) {
  onUpdateAppStart(filter: $filter) {
    firstName
    lastName
    email
    phone
    source
    sourceUrl
    id
    createdOn
    updatedOn
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAppStartSubscriptionVariables,
  APITypes.OnUpdateAppStartSubscription
>;
export const onDeleteAppStart = /* GraphQL */ `subscription OnDeleteAppStart($filter: ModelSubscriptionAppStartFilterInput) {
  onDeleteAppStart(filter: $filter) {
    firstName
    lastName
    email
    phone
    source
    sourceUrl
    id
    createdOn
    updatedOn
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAppStartSubscriptionVariables,
  APITypes.OnDeleteAppStartSubscription
>;
export const onCreateApplicationStart = /* GraphQL */ `subscription OnCreateApplicationStart(
  $filter: ModelSubscriptionApplicationStartFilterInput
) {
  onCreateApplicationStart(filter: $filter) {
    id
    createdAt
    firstName
    lastName
    email
    phone
    source
    sourceUrl
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateApplicationStartSubscriptionVariables,
  APITypes.OnCreateApplicationStartSubscription
>;
export const onUpdateApplicationStart = /* GraphQL */ `subscription OnUpdateApplicationStart(
  $filter: ModelSubscriptionApplicationStartFilterInput
) {
  onUpdateApplicationStart(filter: $filter) {
    id
    createdAt
    firstName
    lastName
    email
    phone
    source
    sourceUrl
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationStartSubscriptionVariables,
  APITypes.OnUpdateApplicationStartSubscription
>;
export const onDeleteApplicationStart = /* GraphQL */ `subscription OnDeleteApplicationStart(
  $filter: ModelSubscriptionApplicationStartFilterInput
) {
  onDeleteApplicationStart(filter: $filter) {
    id
    createdAt
    firstName
    lastName
    email
    phone
    source
    sourceUrl
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationStartSubscriptionVariables,
  APITypes.OnDeleteApplicationStartSubscription
>;
export const onCreateCertAppStart = /* GraphQL */ `subscription OnCreateCertAppStart(
  $filter: ModelSubscriptionCertAppStartFilterInput
) {
  onCreateCertAppStart(filter: $filter) {
    id
    type
    createdAt
    firstName
    lastName
    email
    phone
    source
    sourceUrl
    country
    ipAddress
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCertAppStartSubscriptionVariables,
  APITypes.OnCreateCertAppStartSubscription
>;
export const onUpdateCertAppStart = /* GraphQL */ `subscription OnUpdateCertAppStart(
  $filter: ModelSubscriptionCertAppStartFilterInput
) {
  onUpdateCertAppStart(filter: $filter) {
    id
    type
    createdAt
    firstName
    lastName
    email
    phone
    source
    sourceUrl
    country
    ipAddress
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCertAppStartSubscriptionVariables,
  APITypes.OnUpdateCertAppStartSubscription
>;
export const onDeleteCertAppStart = /* GraphQL */ `subscription OnDeleteCertAppStart(
  $filter: ModelSubscriptionCertAppStartFilterInput
) {
  onDeleteCertAppStart(filter: $filter) {
    id
    type
    createdAt
    firstName
    lastName
    email
    phone
    source
    sourceUrl
    country
    ipAddress
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCertAppStartSubscriptionVariables,
  APITypes.OnDeleteCertAppStartSubscription
>;
export const onCreateLMSCollection = /* GraphQL */ `subscription OnCreateLMSCollection(
  $filter: ModelSubscriptionLMSCollectionFilterInput
) {
  onCreateLMSCollection(filter: $filter) {
    id
    description
    title
    subtitle
    instructor
    instructorImage
    instructorDescription
    instructorLink
    courses
    hours
    price
    slug
    category
    collectionId
    lmsLink
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLMSCollectionSubscriptionVariables,
  APITypes.OnCreateLMSCollectionSubscription
>;
export const onUpdateLMSCollection = /* GraphQL */ `subscription OnUpdateLMSCollection(
  $filter: ModelSubscriptionLMSCollectionFilterInput
) {
  onUpdateLMSCollection(filter: $filter) {
    id
    description
    title
    subtitle
    instructor
    instructorImage
    instructorDescription
    instructorLink
    courses
    hours
    price
    slug
    category
    collectionId
    lmsLink
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLMSCollectionSubscriptionVariables,
  APITypes.OnUpdateLMSCollectionSubscription
>;
export const onDeleteLMSCollection = /* GraphQL */ `subscription OnDeleteLMSCollection(
  $filter: ModelSubscriptionLMSCollectionFilterInput
) {
  onDeleteLMSCollection(filter: $filter) {
    id
    description
    title
    subtitle
    instructor
    instructorImage
    instructorDescription
    instructorLink
    courses
    hours
    price
    slug
    category
    collectionId
    lmsLink
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLMSCollectionSubscriptionVariables,
  APITypes.OnDeleteLMSCollectionSubscription
>;
export const onCreateLMSCirriculum = /* GraphQL */ `subscription OnCreateLMSCirriculum(
  $filter: ModelSubscriptionLMSCirriculumFilterInput
) {
  onCreateLMSCirriculum(filter: $filter) {
    id
    shorthand
    title
    slug
    description
    Courses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLMSCirriculumSubscriptionVariables,
  APITypes.OnCreateLMSCirriculumSubscription
>;
export const onUpdateLMSCirriculum = /* GraphQL */ `subscription OnUpdateLMSCirriculum(
  $filter: ModelSubscriptionLMSCirriculumFilterInput
) {
  onUpdateLMSCirriculum(filter: $filter) {
    id
    shorthand
    title
    slug
    description
    Courses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLMSCirriculumSubscriptionVariables,
  APITypes.OnUpdateLMSCirriculumSubscription
>;
export const onDeleteLMSCirriculum = /* GraphQL */ `subscription OnDeleteLMSCirriculum(
  $filter: ModelSubscriptionLMSCirriculumFilterInput
) {
  onDeleteLMSCirriculum(filter: $filter) {
    id
    shorthand
    title
    slug
    description
    Courses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLMSCirriculumSubscriptionVariables,
  APITypes.OnDeleteLMSCirriculumSubscription
>;
export const onCreateLMSCourse = /* GraphQL */ `subscription OnCreateLMSCourse($filter: ModelSubscriptionLMSCourseFilterInput) {
  onCreateLMSCourse(filter: $filter) {
    id
    thinkificId
    learningPaths {
      nextToken
      __typename
    }
    courseId
    category
    categoryArray
    type
    cirriculum {
      nextToken
      __typename
    }
    lmsLessons {
      nextToken
      __typename
    }
    instructors {
      nextToken
      __typename
    }
    price
    hours
    lessons
    videos
    preview
    seoImage
    infoSheet
    title
    subheadline
    what_learned
    objectives
    link
    trial_link
    percentComplete
    slug
    collection
    demo
    partOf
    altLink
    shortDescription
    subscriptionLink
    subscriptionPrice
    stripeLink
    callout
    achievements {
      nextToken
      __typename
    }
    wishlist {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    partner {
      nextToken
      __typename
    }
    libraries {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    customerLibaryClientCoursesId
    customerLibaryPschoolCoursesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLMSCourseSubscriptionVariables,
  APITypes.OnCreateLMSCourseSubscription
>;
export const onUpdateLMSCourse = /* GraphQL */ `subscription OnUpdateLMSCourse($filter: ModelSubscriptionLMSCourseFilterInput) {
  onUpdateLMSCourse(filter: $filter) {
    id
    thinkificId
    learningPaths {
      nextToken
      __typename
    }
    courseId
    category
    categoryArray
    type
    cirriculum {
      nextToken
      __typename
    }
    lmsLessons {
      nextToken
      __typename
    }
    instructors {
      nextToken
      __typename
    }
    price
    hours
    lessons
    videos
    preview
    seoImage
    infoSheet
    title
    subheadline
    what_learned
    objectives
    link
    trial_link
    percentComplete
    slug
    collection
    demo
    partOf
    altLink
    shortDescription
    subscriptionLink
    subscriptionPrice
    stripeLink
    callout
    achievements {
      nextToken
      __typename
    }
    wishlist {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    partner {
      nextToken
      __typename
    }
    libraries {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    customerLibaryClientCoursesId
    customerLibaryPschoolCoursesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLMSCourseSubscriptionVariables,
  APITypes.OnUpdateLMSCourseSubscription
>;
export const onDeleteLMSCourse = /* GraphQL */ `subscription OnDeleteLMSCourse($filter: ModelSubscriptionLMSCourseFilterInput) {
  onDeleteLMSCourse(filter: $filter) {
    id
    thinkificId
    learningPaths {
      nextToken
      __typename
    }
    courseId
    category
    categoryArray
    type
    cirriculum {
      nextToken
      __typename
    }
    lmsLessons {
      nextToken
      __typename
    }
    instructors {
      nextToken
      __typename
    }
    price
    hours
    lessons
    videos
    preview
    seoImage
    infoSheet
    title
    subheadline
    what_learned
    objectives
    link
    trial_link
    percentComplete
    slug
    collection
    demo
    partOf
    altLink
    shortDescription
    subscriptionLink
    subscriptionPrice
    stripeLink
    callout
    achievements {
      nextToken
      __typename
    }
    wishlist {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    partner {
      nextToken
      __typename
    }
    libraries {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    customerLibaryClientCoursesId
    customerLibaryPschoolCoursesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLMSCourseSubscriptionVariables,
  APITypes.OnDeleteLMSCourseSubscription
>;
export const onCreateLMSLesson = /* GraphQL */ `subscription OnCreateLMSLesson($filter: ModelSubscriptionLMSLessonFilterInput) {
  onCreateLMSLesson(filter: $filter) {
    id
    title
    course {
      nextToken
      __typename
    }
    modules {
      nextToken
      __typename
    }
    subheadline
    objectives
    media
    percentComplete
    content
    slug
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLMSLessonSubscriptionVariables,
  APITypes.OnCreateLMSLessonSubscription
>;
export const onUpdateLMSLesson = /* GraphQL */ `subscription OnUpdateLMSLesson($filter: ModelSubscriptionLMSLessonFilterInput) {
  onUpdateLMSLesson(filter: $filter) {
    id
    title
    course {
      nextToken
      __typename
    }
    modules {
      nextToken
      __typename
    }
    subheadline
    objectives
    media
    percentComplete
    content
    slug
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLMSLessonSubscriptionVariables,
  APITypes.OnUpdateLMSLessonSubscription
>;
export const onDeleteLMSLesson = /* GraphQL */ `subscription OnDeleteLMSLesson($filter: ModelSubscriptionLMSLessonFilterInput) {
  onDeleteLMSLesson(filter: $filter) {
    id
    title
    course {
      nextToken
      __typename
    }
    modules {
      nextToken
      __typename
    }
    subheadline
    objectives
    media
    percentComplete
    content
    slug
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLMSLessonSubscriptionVariables,
  APITypes.OnDeleteLMSLessonSubscription
>;
export const onCreateLMSModule = /* GraphQL */ `subscription OnCreateLMSModule($filter: ModelSubscriptionLMSModuleFilterInput) {
  onCreateLMSModule(filter: $filter) {
    id
    title
    lesson {
      id
      title
      subheadline
      objectives
      media
      percentComplete
      content
      slug
      createdAt
      updatedAt
      __typename
    }
    subheadline
    objectives
    mediaType
    slides {
      nextToken
      __typename
    }
    media
    quiz {
      id
      prompt
      answer1
      answer2
      answer3
      answer4
      correctAnswer
      createdAt
      updatedAt
      lMSQuizModuleId
      __typename
    }
    content
    slug
    createdAt
    updatedAt
    lMSLessonModulesId
    lMSModuleQuizId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLMSModuleSubscriptionVariables,
  APITypes.OnCreateLMSModuleSubscription
>;
export const onUpdateLMSModule = /* GraphQL */ `subscription OnUpdateLMSModule($filter: ModelSubscriptionLMSModuleFilterInput) {
  onUpdateLMSModule(filter: $filter) {
    id
    title
    lesson {
      id
      title
      subheadline
      objectives
      media
      percentComplete
      content
      slug
      createdAt
      updatedAt
      __typename
    }
    subheadline
    objectives
    mediaType
    slides {
      nextToken
      __typename
    }
    media
    quiz {
      id
      prompt
      answer1
      answer2
      answer3
      answer4
      correctAnswer
      createdAt
      updatedAt
      lMSQuizModuleId
      __typename
    }
    content
    slug
    createdAt
    updatedAt
    lMSLessonModulesId
    lMSModuleQuizId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLMSModuleSubscriptionVariables,
  APITypes.OnUpdateLMSModuleSubscription
>;
export const onDeleteLMSModule = /* GraphQL */ `subscription OnDeleteLMSModule($filter: ModelSubscriptionLMSModuleFilterInput) {
  onDeleteLMSModule(filter: $filter) {
    id
    title
    lesson {
      id
      title
      subheadline
      objectives
      media
      percentComplete
      content
      slug
      createdAt
      updatedAt
      __typename
    }
    subheadline
    objectives
    mediaType
    slides {
      nextToken
      __typename
    }
    media
    quiz {
      id
      prompt
      answer1
      answer2
      answer3
      answer4
      correctAnswer
      createdAt
      updatedAt
      lMSQuizModuleId
      __typename
    }
    content
    slug
    createdAt
    updatedAt
    lMSLessonModulesId
    lMSModuleQuizId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLMSModuleSubscriptionVariables,
  APITypes.OnDeleteLMSModuleSubscription
>;
export const onCreateLMSQuiz = /* GraphQL */ `subscription OnCreateLMSQuiz($filter: ModelSubscriptionLMSQuizFilterInput) {
  onCreateLMSQuiz(filter: $filter) {
    id
    module {
      id
      title
      subheadline
      objectives
      mediaType
      media
      content
      slug
      createdAt
      updatedAt
      lMSLessonModulesId
      lMSModuleQuizId
      __typename
    }
    prompt
    answer1
    answer2
    answer3
    answer4
    correctAnswer
    createdAt
    updatedAt
    lMSQuizModuleId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLMSQuizSubscriptionVariables,
  APITypes.OnCreateLMSQuizSubscription
>;
export const onUpdateLMSQuiz = /* GraphQL */ `subscription OnUpdateLMSQuiz($filter: ModelSubscriptionLMSQuizFilterInput) {
  onUpdateLMSQuiz(filter: $filter) {
    id
    module {
      id
      title
      subheadline
      objectives
      mediaType
      media
      content
      slug
      createdAt
      updatedAt
      lMSLessonModulesId
      lMSModuleQuizId
      __typename
    }
    prompt
    answer1
    answer2
    answer3
    answer4
    correctAnswer
    createdAt
    updatedAt
    lMSQuizModuleId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLMSQuizSubscriptionVariables,
  APITypes.OnUpdateLMSQuizSubscription
>;
export const onDeleteLMSQuiz = /* GraphQL */ `subscription OnDeleteLMSQuiz($filter: ModelSubscriptionLMSQuizFilterInput) {
  onDeleteLMSQuiz(filter: $filter) {
    id
    module {
      id
      title
      subheadline
      objectives
      mediaType
      media
      content
      slug
      createdAt
      updatedAt
      lMSLessonModulesId
      lMSModuleQuizId
      __typename
    }
    prompt
    answer1
    answer2
    answer3
    answer4
    correctAnswer
    createdAt
    updatedAt
    lMSQuizModuleId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLMSQuizSubscriptionVariables,
  APITypes.OnDeleteLMSQuizSubscription
>;
export const onCreateInstructor = /* GraphQL */ `subscription OnCreateInstructor(
  $filter: ModelSubscriptionInstructorFilterInput
) {
  onCreateInstructor(filter: $filter) {
    id
    userId
    name
    image
    bio
    linkedIn
    company
    title
    coursesTaught {
      nextToken
      __typename
    }
    cohorts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInstructorSubscriptionVariables,
  APITypes.OnCreateInstructorSubscription
>;
export const onUpdateInstructor = /* GraphQL */ `subscription OnUpdateInstructor(
  $filter: ModelSubscriptionInstructorFilterInput
) {
  onUpdateInstructor(filter: $filter) {
    id
    userId
    name
    image
    bio
    linkedIn
    company
    title
    coursesTaught {
      nextToken
      __typename
    }
    cohorts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInstructorSubscriptionVariables,
  APITypes.OnUpdateInstructorSubscription
>;
export const onDeleteInstructor = /* GraphQL */ `subscription OnDeleteInstructor(
  $filter: ModelSubscriptionInstructorFilterInput
) {
  onDeleteInstructor(filter: $filter) {
    id
    userId
    name
    image
    bio
    linkedIn
    company
    title
    coursesTaught {
      nextToken
      __typename
    }
    cohorts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInstructorSubscriptionVariables,
  APITypes.OnDeleteInstructorSubscription
>;
export const onCreateObjective = /* GraphQL */ `subscription OnCreateObjective($filter: ModelSubscriptionObjectiveFilterInput) {
  onCreateObjective(filter: $filter) {
    id
    objective
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateObjectiveSubscriptionVariables,
  APITypes.OnCreateObjectiveSubscription
>;
export const onUpdateObjective = /* GraphQL */ `subscription OnUpdateObjective($filter: ModelSubscriptionObjectiveFilterInput) {
  onUpdateObjective(filter: $filter) {
    id
    objective
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateObjectiveSubscriptionVariables,
  APITypes.OnUpdateObjectiveSubscription
>;
export const onDeleteObjective = /* GraphQL */ `subscription OnDeleteObjective($filter: ModelSubscriptionObjectiveFilterInput) {
  onDeleteObjective(filter: $filter) {
    id
    objective
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteObjectiveSubscriptionVariables,
  APITypes.OnDeleteObjectiveSubscription
>;
export const onCreateSlide = /* GraphQL */ `subscription OnCreateSlide($filter: ModelSubscriptionSlideFilterInput) {
  onCreateSlide(filter: $filter) {
    id
    slideSource
    description
    createdAt
    updatedAt
    lMSModuleSlidesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSlideSubscriptionVariables,
  APITypes.OnCreateSlideSubscription
>;
export const onUpdateSlide = /* GraphQL */ `subscription OnUpdateSlide($filter: ModelSubscriptionSlideFilterInput) {
  onUpdateSlide(filter: $filter) {
    id
    slideSource
    description
    createdAt
    updatedAt
    lMSModuleSlidesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSlideSubscriptionVariables,
  APITypes.OnUpdateSlideSubscription
>;
export const onDeleteSlide = /* GraphQL */ `subscription OnDeleteSlide($filter: ModelSubscriptionSlideFilterInput) {
  onDeleteSlide(filter: $filter) {
    id
    slideSource
    description
    createdAt
    updatedAt
    lMSModuleSlidesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSlideSubscriptionVariables,
  APITypes.OnDeleteSlideSubscription
>;
export const onCreateTimestamp = /* GraphQL */ `subscription OnCreateTimestamp($filter: ModelSubscriptionTimestampFilterInput) {
  onCreateTimestamp(filter: $filter) {
    id
    time
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTimestampSubscriptionVariables,
  APITypes.OnCreateTimestampSubscription
>;
export const onUpdateTimestamp = /* GraphQL */ `subscription OnUpdateTimestamp($filter: ModelSubscriptionTimestampFilterInput) {
  onUpdateTimestamp(filter: $filter) {
    id
    time
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTimestampSubscriptionVariables,
  APITypes.OnUpdateTimestampSubscription
>;
export const onDeleteTimestamp = /* GraphQL */ `subscription OnDeleteTimestamp($filter: ModelSubscriptionTimestampFilterInput) {
  onDeleteTimestamp(filter: $filter) {
    id
    time
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTimestampSubscriptionVariables,
  APITypes.OnDeleteTimestampSubscription
>;
export const onCreateStaff = /* GraphQL */ `subscription OnCreateStaff($filter: ModelSubscriptionStaffFilterInput) {
  onCreateStaff(filter: $filter) {
    id
    fullName
    title
    image
    linkedIn
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStaffSubscriptionVariables,
  APITypes.OnCreateStaffSubscription
>;
export const onUpdateStaff = /* GraphQL */ `subscription OnUpdateStaff($filter: ModelSubscriptionStaffFilterInput) {
  onUpdateStaff(filter: $filter) {
    id
    fullName
    title
    image
    linkedIn
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStaffSubscriptionVariables,
  APITypes.OnUpdateStaffSubscription
>;
export const onDeleteStaff = /* GraphQL */ `subscription OnDeleteStaff($filter: ModelSubscriptionStaffFilterInput) {
  onDeleteStaff(filter: $filter) {
    id
    fullName
    title
    image
    linkedIn
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStaffSubscriptionVariables,
  APITypes.OnDeleteStaffSubscription
>;
export const onCreateTrackedCourse = /* GraphQL */ `subscription OnCreateTrackedCourse(
  $filter: ModelSubscriptionTrackedCourseFilterInput
) {
  onCreateTrackedCourse(filter: $filter) {
    id
    courseId
    clicks
    customer {
      id
      displayName
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      offerings
      status
      createdAt
      updatedAt
      __typename
    }
    customerId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTrackedCourseSubscriptionVariables,
  APITypes.OnCreateTrackedCourseSubscription
>;
export const onUpdateTrackedCourse = /* GraphQL */ `subscription OnUpdateTrackedCourse(
  $filter: ModelSubscriptionTrackedCourseFilterInput
) {
  onUpdateTrackedCourse(filter: $filter) {
    id
    courseId
    clicks
    customer {
      id
      displayName
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      offerings
      status
      createdAt
      updatedAt
      __typename
    }
    customerId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTrackedCourseSubscriptionVariables,
  APITypes.OnUpdateTrackedCourseSubscription
>;
export const onDeleteTrackedCourse = /* GraphQL */ `subscription OnDeleteTrackedCourse(
  $filter: ModelSubscriptionTrackedCourseFilterInput
) {
  onDeleteTrackedCourse(filter: $filter) {
    id
    courseId
    clicks
    customer {
      id
      displayName
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      offerings
      status
      createdAt
      updatedAt
      __typename
    }
    customerId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTrackedCourseSubscriptionVariables,
  APITypes.OnDeleteTrackedCourseSubscription
>;
export const onCreateIncludedCourse = /* GraphQL */ `subscription OnCreateIncludedCourse(
  $filter: ModelSubscriptionIncludedCourseFilterInput
) {
  onCreateIncludedCourse(filter: $filter) {
    id
    courseId
    customer {
      id
      displayName
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      offerings
      status
      createdAt
      updatedAt
      __typename
    }
    customerId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIncludedCourseSubscriptionVariables,
  APITypes.OnCreateIncludedCourseSubscription
>;
export const onUpdateIncludedCourse = /* GraphQL */ `subscription OnUpdateIncludedCourse(
  $filter: ModelSubscriptionIncludedCourseFilterInput
) {
  onUpdateIncludedCourse(filter: $filter) {
    id
    courseId
    customer {
      id
      displayName
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      offerings
      status
      createdAt
      updatedAt
      __typename
    }
    customerId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIncludedCourseSubscriptionVariables,
  APITypes.OnUpdateIncludedCourseSubscription
>;
export const onDeleteIncludedCourse = /* GraphQL */ `subscription OnDeleteIncludedCourse(
  $filter: ModelSubscriptionIncludedCourseFilterInput
) {
  onDeleteIncludedCourse(filter: $filter) {
    id
    courseId
    customer {
      id
      displayName
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      offered
      offerings
      status
      createdAt
      updatedAt
      __typename
    }
    customerId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIncludedCourseSubscriptionVariables,
  APITypes.OnDeleteIncludedCourseSubscription
>;
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onCreateCustomer(filter: $filter) {
    id
    displayName
    link
    logo
    email
    primaryColor
    highlightColor
    pdf
    slide
    video
    offered
    pscourses {
      nextToken
      __typename
    }
    courses {
      nextToken
      __typename
    }
    offerings
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onUpdateCustomer(filter: $filter) {
    id
    displayName
    link
    logo
    email
    primaryColor
    highlightColor
    pdf
    slide
    video
    offered
    pscourses {
      nextToken
      __typename
    }
    courses {
      nextToken
      __typename
    }
    offerings
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onDeleteCustomer(filter: $filter) {
    id
    displayName
    link
    logo
    email
    primaryColor
    highlightColor
    pdf
    slide
    video
    offered
    pscourses {
      nextToken
      __typename
    }
    courses {
      nextToken
      __typename
    }
    offerings
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onCreateCustomerLibary = /* GraphQL */ `subscription OnCreateCustomerLibary(
  $filter: ModelSubscriptionCustomerLibaryFilterInput
) {
  onCreateCustomerLibary(filter: $filter) {
    id
    displayName
    slug
    description
    link
    logo
    email
    primaryColor
    highlightColor
    pdf
    slide
    video
    clientCourses {
      nextToken
      __typename
    }
    pschoolCourses {
      nextToken
      __typename
    }
    courses {
      nextToken
      __typename
    }
    addOns
    backgroundImage
    code
    status
    availableCodes
    usedCodes
    promotionId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCustomerLibarySubscriptionVariables,
  APITypes.OnCreateCustomerLibarySubscription
>;
export const onUpdateCustomerLibary = /* GraphQL */ `subscription OnUpdateCustomerLibary(
  $filter: ModelSubscriptionCustomerLibaryFilterInput
) {
  onUpdateCustomerLibary(filter: $filter) {
    id
    displayName
    slug
    description
    link
    logo
    email
    primaryColor
    highlightColor
    pdf
    slide
    video
    clientCourses {
      nextToken
      __typename
    }
    pschoolCourses {
      nextToken
      __typename
    }
    courses {
      nextToken
      __typename
    }
    addOns
    backgroundImage
    code
    status
    availableCodes
    usedCodes
    promotionId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerLibarySubscriptionVariables,
  APITypes.OnUpdateCustomerLibarySubscription
>;
export const onDeleteCustomerLibary = /* GraphQL */ `subscription OnDeleteCustomerLibary(
  $filter: ModelSubscriptionCustomerLibaryFilterInput
) {
  onDeleteCustomerLibary(filter: $filter) {
    id
    displayName
    slug
    description
    link
    logo
    email
    primaryColor
    highlightColor
    pdf
    slide
    video
    clientCourses {
      nextToken
      __typename
    }
    pschoolCourses {
      nextToken
      __typename
    }
    courses {
      nextToken
      __typename
    }
    addOns
    backgroundImage
    code
    status
    availableCodes
    usedCodes
    promotionId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerLibarySubscriptionVariables,
  APITypes.OnDeleteCustomerLibarySubscription
>;
export const onCreateSalesBar = /* GraphQL */ `subscription OnCreateSalesBar($filter: ModelSubscriptionSalesBarFilterInput) {
  onCreateSalesBar(filter: $filter) {
    id
    text
    link
    icon
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSalesBarSubscriptionVariables,
  APITypes.OnCreateSalesBarSubscription
>;
export const onUpdateSalesBar = /* GraphQL */ `subscription OnUpdateSalesBar($filter: ModelSubscriptionSalesBarFilterInput) {
  onUpdateSalesBar(filter: $filter) {
    id
    text
    link
    icon
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSalesBarSubscriptionVariables,
  APITypes.OnUpdateSalesBarSubscription
>;
export const onDeleteSalesBar = /* GraphQL */ `subscription OnDeleteSalesBar($filter: ModelSubscriptionSalesBarFilterInput) {
  onDeleteSalesBar(filter: $filter) {
    id
    text
    link
    icon
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSalesBarSubscriptionVariables,
  APITypes.OnDeleteSalesBarSubscription
>;
export const onCreateTestimonial = /* GraphQL */ `subscription OnCreateTestimonial(
  $filter: ModelSubscriptionTestimonialFilterInput
) {
  onCreateTestimonial(filter: $filter) {
    id
    content
    author
    company
    affiliation
    title
    tags
    linkedin
    headshot
    featured
    date
    video
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTestimonialSubscriptionVariables,
  APITypes.OnCreateTestimonialSubscription
>;
export const onUpdateTestimonial = /* GraphQL */ `subscription OnUpdateTestimonial(
  $filter: ModelSubscriptionTestimonialFilterInput
) {
  onUpdateTestimonial(filter: $filter) {
    id
    content
    author
    company
    affiliation
    title
    tags
    linkedin
    headshot
    featured
    date
    video
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTestimonialSubscriptionVariables,
  APITypes.OnUpdateTestimonialSubscription
>;
export const onDeleteTestimonial = /* GraphQL */ `subscription OnDeleteTestimonial(
  $filter: ModelSubscriptionTestimonialFilterInput
) {
  onDeleteTestimonial(filter: $filter) {
    id
    content
    author
    company
    affiliation
    title
    tags
    linkedin
    headshot
    featured
    date
    video
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTestimonialSubscriptionVariables,
  APITypes.OnDeleteTestimonialSubscription
>;
export const onCreateWorkshopForm = /* GraphQL */ `subscription OnCreateWorkshopForm(
  $filter: ModelSubscriptionWorkshopFormFilterInput
) {
  onCreateWorkshopForm(filter: $filter) {
    firstName
    lastName
    email
    phone
    companyName
    eventDate
    audienceSize
    eventLocation
    eventDescription
    id
    createdOn
    updatedOn
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWorkshopFormSubscriptionVariables,
  APITypes.OnCreateWorkshopFormSubscription
>;
export const onUpdateWorkshopForm = /* GraphQL */ `subscription OnUpdateWorkshopForm(
  $filter: ModelSubscriptionWorkshopFormFilterInput
) {
  onUpdateWorkshopForm(filter: $filter) {
    firstName
    lastName
    email
    phone
    companyName
    eventDate
    audienceSize
    eventLocation
    eventDescription
    id
    createdOn
    updatedOn
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWorkshopFormSubscriptionVariables,
  APITypes.OnUpdateWorkshopFormSubscription
>;
export const onDeleteWorkshopForm = /* GraphQL */ `subscription OnDeleteWorkshopForm(
  $filter: ModelSubscriptionWorkshopFormFilterInput
) {
  onDeleteWorkshopForm(filter: $filter) {
    firstName
    lastName
    email
    phone
    companyName
    eventDate
    audienceSize
    eventLocation
    eventDescription
    id
    createdOn
    updatedOn
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWorkshopFormSubscriptionVariables,
  APITypes.OnDeleteWorkshopFormSubscription
>;
export const onCreateCourseClick = /* GraphQL */ `subscription OnCreateCourseClick(
  $filter: ModelSubscriptionCourseClickFilterInput
) {
  onCreateCourseClick(filter: $filter) {
    id
    courseID
    page
    ipAddress
    country
    lat
    long
    referrer
    nextPath
    format
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCourseClickSubscriptionVariables,
  APITypes.OnCreateCourseClickSubscription
>;
export const onUpdateCourseClick = /* GraphQL */ `subscription OnUpdateCourseClick(
  $filter: ModelSubscriptionCourseClickFilterInput
) {
  onUpdateCourseClick(filter: $filter) {
    id
    courseID
    page
    ipAddress
    country
    lat
    long
    referrer
    nextPath
    format
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCourseClickSubscriptionVariables,
  APITypes.OnUpdateCourseClickSubscription
>;
export const onDeleteCourseClick = /* GraphQL */ `subscription OnDeleteCourseClick(
  $filter: ModelSubscriptionCourseClickFilterInput
) {
  onDeleteCourseClick(filter: $filter) {
    id
    courseID
    page
    ipAddress
    country
    lat
    long
    referrer
    nextPath
    format
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCourseClickSubscriptionVariables,
  APITypes.OnDeleteCourseClickSubscription
>;
export const onCreateSalesbarClick = /* GraphQL */ `subscription OnCreateSalesbarClick(
  $filter: ModelSubscriptionSalesbarClickFilterInput
) {
  onCreateSalesbarClick(filter: $filter) {
    id
    page
    ipAddress
    country
    link
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSalesbarClickSubscriptionVariables,
  APITypes.OnCreateSalesbarClickSubscription
>;
export const onUpdateSalesbarClick = /* GraphQL */ `subscription OnUpdateSalesbarClick(
  $filter: ModelSubscriptionSalesbarClickFilterInput
) {
  onUpdateSalesbarClick(filter: $filter) {
    id
    page
    ipAddress
    country
    link
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSalesbarClickSubscriptionVariables,
  APITypes.OnUpdateSalesbarClickSubscription
>;
export const onDeleteSalesbarClick = /* GraphQL */ `subscription OnDeleteSalesbarClick(
  $filter: ModelSubscriptionSalesbarClickFilterInput
) {
  onDeleteSalesbarClick(filter: $filter) {
    id
    page
    ipAddress
    country
    link
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSalesbarClickSubscriptionVariables,
  APITypes.OnDeleteSalesbarClickSubscription
>;
export const onCreateLessonClick = /* GraphQL */ `subscription OnCreateLessonClick(
  $filter: ModelSubscriptionLessonClickFilterInput
) {
  onCreateLessonClick(filter: $filter) {
    id
    LessonID
    page
    ipAddress
    country
    lat
    long
    referrer
    format
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLessonClickSubscriptionVariables,
  APITypes.OnCreateLessonClickSubscription
>;
export const onUpdateLessonClick = /* GraphQL */ `subscription OnUpdateLessonClick(
  $filter: ModelSubscriptionLessonClickFilterInput
) {
  onUpdateLessonClick(filter: $filter) {
    id
    LessonID
    page
    ipAddress
    country
    lat
    long
    referrer
    format
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLessonClickSubscriptionVariables,
  APITypes.OnUpdateLessonClickSubscription
>;
export const onDeleteLessonClick = /* GraphQL */ `subscription OnDeleteLessonClick(
  $filter: ModelSubscriptionLessonClickFilterInput
) {
  onDeleteLessonClick(filter: $filter) {
    id
    LessonID
    page
    ipAddress
    country
    lat
    long
    referrer
    format
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLessonClickSubscriptionVariables,
  APITypes.OnDeleteLessonClickSubscription
>;
export const onCreateCourseSearch = /* GraphQL */ `subscription OnCreateCourseSearch(
  $filter: ModelSubscriptionCourseSearchFilterInput
) {
  onCreateCourseSearch(filter: $filter) {
    id
    term
    ipAddress
    country
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCourseSearchSubscriptionVariables,
  APITypes.OnCreateCourseSearchSubscription
>;
export const onUpdateCourseSearch = /* GraphQL */ `subscription OnUpdateCourseSearch(
  $filter: ModelSubscriptionCourseSearchFilterInput
) {
  onUpdateCourseSearch(filter: $filter) {
    id
    term
    ipAddress
    country
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSearchSubscriptionVariables,
  APITypes.OnUpdateCourseSearchSubscription
>;
export const onDeleteCourseSearch = /* GraphQL */ `subscription OnDeleteCourseSearch(
  $filter: ModelSubscriptionCourseSearchFilterInput
) {
  onDeleteCourseSearch(filter: $filter) {
    id
    term
    ipAddress
    country
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSearchSubscriptionVariables,
  APITypes.OnDeleteCourseSearchSubscription
>;
export const onCreateCyberMondayClick = /* GraphQL */ `subscription OnCreateCyberMondayClick(
  $filter: ModelSubscriptionCyberMondayClickFilterInput
) {
  onCreateCyberMondayClick(filter: $filter) {
    id
    object
    ipAddress
    country
    device
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCyberMondayClickSubscriptionVariables,
  APITypes.OnCreateCyberMondayClickSubscription
>;
export const onUpdateCyberMondayClick = /* GraphQL */ `subscription OnUpdateCyberMondayClick(
  $filter: ModelSubscriptionCyberMondayClickFilterInput
) {
  onUpdateCyberMondayClick(filter: $filter) {
    id
    object
    ipAddress
    country
    device
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCyberMondayClickSubscriptionVariables,
  APITypes.OnUpdateCyberMondayClickSubscription
>;
export const onDeleteCyberMondayClick = /* GraphQL */ `subscription OnDeleteCyberMondayClick(
  $filter: ModelSubscriptionCyberMondayClickFilterInput
) {
  onDeleteCyberMondayClick(filter: $filter) {
    id
    object
    ipAddress
    country
    device
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCyberMondayClickSubscriptionVariables,
  APITypes.OnDeleteCyberMondayClickSubscription
>;
export const onCreateAPSPresentationClick = /* GraphQL */ `subscription OnCreateAPSPresentationClick(
  $filter: ModelSubscriptionAPSPresentationClickFilterInput
) {
  onCreateAPSPresentationClick(filter: $filter) {
    id
    object
    ipAddress
    country
    device
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAPSPresentationClickSubscriptionVariables,
  APITypes.OnCreateAPSPresentationClickSubscription
>;
export const onUpdateAPSPresentationClick = /* GraphQL */ `subscription OnUpdateAPSPresentationClick(
  $filter: ModelSubscriptionAPSPresentationClickFilterInput
) {
  onUpdateAPSPresentationClick(filter: $filter) {
    id
    object
    ipAddress
    country
    device
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAPSPresentationClickSubscriptionVariables,
  APITypes.OnUpdateAPSPresentationClickSubscription
>;
export const onDeleteAPSPresentationClick = /* GraphQL */ `subscription OnDeleteAPSPresentationClick(
  $filter: ModelSubscriptionAPSPresentationClickFilterInput
) {
  onDeleteAPSPresentationClick(filter: $filter) {
    id
    object
    ipAddress
    country
    device
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAPSPresentationClickSubscriptionVariables,
  APITypes.OnDeleteAPSPresentationClickSubscription
>;
export const onCreateCategoryClick = /* GraphQL */ `subscription OnCreateCategoryClick(
  $filter: ModelSubscriptionCategoryClickFilterInput
) {
  onCreateCategoryClick(filter: $filter) {
    id
    category
    ipAddress
    country
    device
    email
    page
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCategoryClickSubscriptionVariables,
  APITypes.OnCreateCategoryClickSubscription
>;
export const onUpdateCategoryClick = /* GraphQL */ `subscription OnUpdateCategoryClick(
  $filter: ModelSubscriptionCategoryClickFilterInput
) {
  onUpdateCategoryClick(filter: $filter) {
    id
    category
    ipAddress
    country
    device
    email
    page
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCategoryClickSubscriptionVariables,
  APITypes.OnUpdateCategoryClickSubscription
>;
export const onDeleteCategoryClick = /* GraphQL */ `subscription OnDeleteCategoryClick(
  $filter: ModelSubscriptionCategoryClickFilterInput
) {
  onDeleteCategoryClick(filter: $filter) {
    id
    category
    ipAddress
    country
    device
    email
    page
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCategoryClickSubscriptionVariables,
  APITypes.OnDeleteCategoryClickSubscription
>;
export const onCreateClick = /* GraphQL */ `subscription OnCreateClick($filter: ModelSubscriptionClickFilterInput) {
  onCreateClick(filter: $filter) {
    id
    ref
    path
    type
    identifier
    nextPath
    ipAddress
    location
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateClickSubscriptionVariables,
  APITypes.OnCreateClickSubscription
>;
export const onUpdateClick = /* GraphQL */ `subscription OnUpdateClick($filter: ModelSubscriptionClickFilterInput) {
  onUpdateClick(filter: $filter) {
    id
    ref
    path
    type
    identifier
    nextPath
    ipAddress
    location
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateClickSubscriptionVariables,
  APITypes.OnUpdateClickSubscription
>;
export const onDeleteClick = /* GraphQL */ `subscription OnDeleteClick($filter: ModelSubscriptionClickFilterInput) {
  onDeleteClick(filter: $filter) {
    id
    ref
    path
    type
    identifier
    nextPath
    ipAddress
    location
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteClickSubscriptionVariables,
  APITypes.OnDeleteClickSubscription
>;
export const onCreateIndiaClick = /* GraphQL */ `subscription OnCreateIndiaClick(
  $filter: ModelSubscriptionIndiaClickFilterInput
) {
  onCreateIndiaClick(filter: $filter) {
    id
    courseID
    page
    ipAddress
    country
    lat
    long
    referrer
    nextPath
    format
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIndiaClickSubscriptionVariables,
  APITypes.OnCreateIndiaClickSubscription
>;
export const onUpdateIndiaClick = /* GraphQL */ `subscription OnUpdateIndiaClick(
  $filter: ModelSubscriptionIndiaClickFilterInput
) {
  onUpdateIndiaClick(filter: $filter) {
    id
    courseID
    page
    ipAddress
    country
    lat
    long
    referrer
    nextPath
    format
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIndiaClickSubscriptionVariables,
  APITypes.OnUpdateIndiaClickSubscription
>;
export const onDeleteIndiaClick = /* GraphQL */ `subscription OnDeleteIndiaClick(
  $filter: ModelSubscriptionIndiaClickFilterInput
) {
  onDeleteIndiaClick(filter: $filter) {
    id
    courseID
    page
    ipAddress
    country
    lat
    long
    referrer
    nextPath
    format
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIndiaClickSubscriptionVariables,
  APITypes.OnDeleteIndiaClickSubscription
>;
export const onCreateIndiaCourseSearch = /* GraphQL */ `subscription OnCreateIndiaCourseSearch(
  $filter: ModelSubscriptionIndiaCourseSearchFilterInput
) {
  onCreateIndiaCourseSearch(filter: $filter) {
    id
    term
    ipAddress
    country
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIndiaCourseSearchSubscriptionVariables,
  APITypes.OnCreateIndiaCourseSearchSubscription
>;
export const onUpdateIndiaCourseSearch = /* GraphQL */ `subscription OnUpdateIndiaCourseSearch(
  $filter: ModelSubscriptionIndiaCourseSearchFilterInput
) {
  onUpdateIndiaCourseSearch(filter: $filter) {
    id
    term
    ipAddress
    country
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIndiaCourseSearchSubscriptionVariables,
  APITypes.OnUpdateIndiaCourseSearchSubscription
>;
export const onDeleteIndiaCourseSearch = /* GraphQL */ `subscription OnDeleteIndiaCourseSearch(
  $filter: ModelSubscriptionIndiaCourseSearchFilterInput
) {
  onDeleteIndiaCourseSearch(filter: $filter) {
    id
    term
    ipAddress
    country
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIndiaCourseSearchSubscriptionVariables,
  APITypes.OnDeleteIndiaCourseSearchSubscription
>;
export const onCreateIndexTemplate = /* GraphQL */ `subscription OnCreateIndexTemplate(
  $filter: ModelSubscriptionIndexTemplateFilterInput
) {
  onCreateIndexTemplate(filter: $filter) {
    id
    slug
    title
    subhead
    authors {
      nextToken
      __typename
    }
    rows {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIndexTemplateSubscriptionVariables,
  APITypes.OnCreateIndexTemplateSubscription
>;
export const onUpdateIndexTemplate = /* GraphQL */ `subscription OnUpdateIndexTemplate(
  $filter: ModelSubscriptionIndexTemplateFilterInput
) {
  onUpdateIndexTemplate(filter: $filter) {
    id
    slug
    title
    subhead
    authors {
      nextToken
      __typename
    }
    rows {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIndexTemplateSubscriptionVariables,
  APITypes.OnUpdateIndexTemplateSubscription
>;
export const onDeleteIndexTemplate = /* GraphQL */ `subscription OnDeleteIndexTemplate(
  $filter: ModelSubscriptionIndexTemplateFilterInput
) {
  onDeleteIndexTemplate(filter: $filter) {
    id
    slug
    title
    subhead
    authors {
      nextToken
      __typename
    }
    rows {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIndexTemplateSubscriptionVariables,
  APITypes.OnDeleteIndexTemplateSubscription
>;
export const onCreateIndexRow = /* GraphQL */ `subscription OnCreateIndexRow($filter: ModelSubscriptionIndexRowFilterInput) {
  onCreateIndexRow(filter: $filter) {
    id
    headline
    subhead
    type
    content
    templates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIndexRowSubscriptionVariables,
  APITypes.OnCreateIndexRowSubscription
>;
export const onUpdateIndexRow = /* GraphQL */ `subscription OnUpdateIndexRow($filter: ModelSubscriptionIndexRowFilterInput) {
  onUpdateIndexRow(filter: $filter) {
    id
    headline
    subhead
    type
    content
    templates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIndexRowSubscriptionVariables,
  APITypes.OnUpdateIndexRowSubscription
>;
export const onDeleteIndexRow = /* GraphQL */ `subscription OnDeleteIndexRow($filter: ModelSubscriptionIndexRowFilterInput) {
  onDeleteIndexRow(filter: $filter) {
    id
    headline
    subhead
    type
    content
    templates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIndexRowSubscriptionVariables,
  APITypes.OnDeleteIndexRowSubscription
>;
export const onCreateIndexPage = /* GraphQL */ `subscription OnCreateIndexPage($filter: ModelSubscriptionIndexPageFilterInput) {
  onCreateIndexPage(filter: $filter) {
    id
    content
    seoImage
    slug
    discount
    status
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIndexPageSubscriptionVariables,
  APITypes.OnCreateIndexPageSubscription
>;
export const onUpdateIndexPage = /* GraphQL */ `subscription OnUpdateIndexPage($filter: ModelSubscriptionIndexPageFilterInput) {
  onUpdateIndexPage(filter: $filter) {
    id
    content
    seoImage
    slug
    discount
    status
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIndexPageSubscriptionVariables,
  APITypes.OnUpdateIndexPageSubscription
>;
export const onDeleteIndexPage = /* GraphQL */ `subscription OnDeleteIndexPage($filter: ModelSubscriptionIndexPageFilterInput) {
  onDeleteIndexPage(filter: $filter) {
    id
    content
    seoImage
    slug
    discount
    status
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIndexPageSubscriptionVariables,
  APITypes.OnDeleteIndexPageSubscription
>;
export const onCreateFaq = /* GraphQL */ `subscription OnCreateFaq($filter: ModelSubscriptionFaqFilterInput) {
  onCreateFaq(filter: $filter) {
    id
    question
    answer
    type
    order
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFaqSubscriptionVariables,
  APITypes.OnCreateFaqSubscription
>;
export const onUpdateFaq = /* GraphQL */ `subscription OnUpdateFaq($filter: ModelSubscriptionFaqFilterInput) {
  onUpdateFaq(filter: $filter) {
    id
    question
    answer
    type
    order
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFaqSubscriptionVariables,
  APITypes.OnUpdateFaqSubscription
>;
export const onDeleteFaq = /* GraphQL */ `subscription OnDeleteFaq($filter: ModelSubscriptionFaqFilterInput) {
  onDeleteFaq(filter: $filter) {
    id
    question
    answer
    type
    order
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFaqSubscriptionVariables,
  APITypes.OnDeleteFaqSubscription
>;
export const onCreateGlossaryTerm = /* GraphQL */ `subscription OnCreateGlossaryTerm(
  $filter: ModelSubscriptionGlossaryTermFilterInput
) {
  onCreateGlossaryTerm(filter: $filter) {
    id
    term
    letter
    definition
    order
    status
    rand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGlossaryTermSubscriptionVariables,
  APITypes.OnCreateGlossaryTermSubscription
>;
export const onUpdateGlossaryTerm = /* GraphQL */ `subscription OnUpdateGlossaryTerm(
  $filter: ModelSubscriptionGlossaryTermFilterInput
) {
  onUpdateGlossaryTerm(filter: $filter) {
    id
    term
    letter
    definition
    order
    status
    rand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGlossaryTermSubscriptionVariables,
  APITypes.OnUpdateGlossaryTermSubscription
>;
export const onDeleteGlossaryTerm = /* GraphQL */ `subscription OnDeleteGlossaryTerm(
  $filter: ModelSubscriptionGlossaryTermFilterInput
) {
  onDeleteGlossaryTerm(filter: $filter) {
    id
    term
    letter
    definition
    order
    status
    rand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGlossaryTermSubscriptionVariables,
  APITypes.OnDeleteGlossaryTermSubscription
>;
export const onCreateEventTemplate = /* GraphQL */ `subscription OnCreateEventTemplate(
  $filter: ModelSubscriptionEventTemplateFilterInput
) {
  onCreateEventTemplate(filter: $filter) {
    id
    title
    startDate
    endDate
    description
    location
    hero
    link
    photos {
      nextToken
      __typename
    }
    presentations {
      nextToken
      __typename
    }
    agenda {
      id
      createdAt
      updatedAt
      eventAgendaEventId
      __typename
    }
    speakers {
      nextToken
      __typename
    }
    slug
    logo
    clicks {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    eventTemplateAgendaId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventTemplateSubscriptionVariables,
  APITypes.OnCreateEventTemplateSubscription
>;
export const onUpdateEventTemplate = /* GraphQL */ `subscription OnUpdateEventTemplate(
  $filter: ModelSubscriptionEventTemplateFilterInput
) {
  onUpdateEventTemplate(filter: $filter) {
    id
    title
    startDate
    endDate
    description
    location
    hero
    link
    photos {
      nextToken
      __typename
    }
    presentations {
      nextToken
      __typename
    }
    agenda {
      id
      createdAt
      updatedAt
      eventAgendaEventId
      __typename
    }
    speakers {
      nextToken
      __typename
    }
    slug
    logo
    clicks {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    eventTemplateAgendaId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventTemplateSubscriptionVariables,
  APITypes.OnUpdateEventTemplateSubscription
>;
export const onDeleteEventTemplate = /* GraphQL */ `subscription OnDeleteEventTemplate(
  $filter: ModelSubscriptionEventTemplateFilterInput
) {
  onDeleteEventTemplate(filter: $filter) {
    id
    title
    startDate
    endDate
    description
    location
    hero
    link
    photos {
      nextToken
      __typename
    }
    presentations {
      nextToken
      __typename
    }
    agenda {
      id
      createdAt
      updatedAt
      eventAgendaEventId
      __typename
    }
    speakers {
      nextToken
      __typename
    }
    slug
    logo
    clicks {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    eventTemplateAgendaId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventTemplateSubscriptionVariables,
  APITypes.OnDeleteEventTemplateSubscription
>;
export const onCreateEventPhoto = /* GraphQL */ `subscription OnCreateEventPhoto(
  $filter: ModelSubscriptionEventPhotoFilterInput
) {
  onCreateEventPhoto(filter: $filter) {
    id
    photo
    caption
    uploadedBy
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    order
    createdAt
    updatedAt
    eventTemplatePhotosId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventPhotoSubscriptionVariables,
  APITypes.OnCreateEventPhotoSubscription
>;
export const onUpdateEventPhoto = /* GraphQL */ `subscription OnUpdateEventPhoto(
  $filter: ModelSubscriptionEventPhotoFilterInput
) {
  onUpdateEventPhoto(filter: $filter) {
    id
    photo
    caption
    uploadedBy
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    order
    createdAt
    updatedAt
    eventTemplatePhotosId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventPhotoSubscriptionVariables,
  APITypes.OnUpdateEventPhotoSubscription
>;
export const onDeleteEventPhoto = /* GraphQL */ `subscription OnDeleteEventPhoto(
  $filter: ModelSubscriptionEventPhotoFilterInput
) {
  onDeleteEventPhoto(filter: $filter) {
    id
    photo
    caption
    uploadedBy
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    order
    createdAt
    updatedAt
    eventTemplatePhotosId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventPhotoSubscriptionVariables,
  APITypes.OnDeleteEventPhotoSubscription
>;
export const onCreateUserEventPhoto = /* GraphQL */ `subscription OnCreateUserEventPhoto(
  $filter: ModelSubscriptionUserEventPhotoFilterInput
) {
  onCreateUserEventPhoto(filter: $filter) {
    id
    photo
    caption
    uploadedBy
    eventID
    event
    approved
    approvedId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserEventPhotoSubscriptionVariables,
  APITypes.OnCreateUserEventPhotoSubscription
>;
export const onUpdateUserEventPhoto = /* GraphQL */ `subscription OnUpdateUserEventPhoto(
  $filter: ModelSubscriptionUserEventPhotoFilterInput
) {
  onUpdateUserEventPhoto(filter: $filter) {
    id
    photo
    caption
    uploadedBy
    eventID
    event
    approved
    approvedId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserEventPhotoSubscriptionVariables,
  APITypes.OnUpdateUserEventPhotoSubscription
>;
export const onDeleteUserEventPhoto = /* GraphQL */ `subscription OnDeleteUserEventPhoto(
  $filter: ModelSubscriptionUserEventPhotoFilterInput
) {
  onDeleteUserEventPhoto(filter: $filter) {
    id
    photo
    caption
    uploadedBy
    eventID
    event
    approved
    approvedId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserEventPhotoSubscriptionVariables,
  APITypes.OnDeleteUserEventPhotoSubscription
>;
export const onCreateEventPresentation = /* GraphQL */ `subscription OnCreateEventPresentation(
  $filter: ModelSubscriptionEventPresentationFilterInput
) {
  onCreateEventPresentation(filter: $filter) {
    id
    presentation
    hero
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    createdAt
    updatedAt
    eventTemplatePresentationsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventPresentationSubscriptionVariables,
  APITypes.OnCreateEventPresentationSubscription
>;
export const onUpdateEventPresentation = /* GraphQL */ `subscription OnUpdateEventPresentation(
  $filter: ModelSubscriptionEventPresentationFilterInput
) {
  onUpdateEventPresentation(filter: $filter) {
    id
    presentation
    hero
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    createdAt
    updatedAt
    eventTemplatePresentationsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventPresentationSubscriptionVariables,
  APITypes.OnUpdateEventPresentationSubscription
>;
export const onDeleteEventPresentation = /* GraphQL */ `subscription OnDeleteEventPresentation(
  $filter: ModelSubscriptionEventPresentationFilterInput
) {
  onDeleteEventPresentation(filter: $filter) {
    id
    presentation
    hero
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    createdAt
    updatedAt
    eventTemplatePresentationsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventPresentationSubscriptionVariables,
  APITypes.OnDeleteEventPresentationSubscription
>;
export const onCreateEventAgenda = /* GraphQL */ `subscription OnCreateEventAgenda(
  $filter: ModelSubscriptionEventAgendaFilterInput
) {
  onCreateEventAgenda(filter: $filter) {
    id
    items {
      nextToken
      __typename
    }
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    createdAt
    updatedAt
    eventAgendaEventId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventAgendaSubscriptionVariables,
  APITypes.OnCreateEventAgendaSubscription
>;
export const onUpdateEventAgenda = /* GraphQL */ `subscription OnUpdateEventAgenda(
  $filter: ModelSubscriptionEventAgendaFilterInput
) {
  onUpdateEventAgenda(filter: $filter) {
    id
    items {
      nextToken
      __typename
    }
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    createdAt
    updatedAt
    eventAgendaEventId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventAgendaSubscriptionVariables,
  APITypes.OnUpdateEventAgendaSubscription
>;
export const onDeleteEventAgenda = /* GraphQL */ `subscription OnDeleteEventAgenda(
  $filter: ModelSubscriptionEventAgendaFilterInput
) {
  onDeleteEventAgenda(filter: $filter) {
    id
    items {
      nextToken
      __typename
    }
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    createdAt
    updatedAt
    eventAgendaEventId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventAgendaSubscriptionVariables,
  APITypes.OnDeleteEventAgendaSubscription
>;
export const onCreateEventAgendaItem = /* GraphQL */ `subscription OnCreateEventAgendaItem(
  $filter: ModelSubscriptionEventAgendaItemFilterInput
) {
  onCreateEventAgendaItem(filter: $filter) {
    id
    title
    description
    location
    type
    start
    end
    speakers {
      nextToken
      __typename
    }
    agenda {
      id
      createdAt
      updatedAt
      eventAgendaEventId
      __typename
    }
    createdAt
    updatedAt
    eventAgendaItemsId
    eventSpeakerAgendaItemsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventAgendaItemSubscriptionVariables,
  APITypes.OnCreateEventAgendaItemSubscription
>;
export const onUpdateEventAgendaItem = /* GraphQL */ `subscription OnUpdateEventAgendaItem(
  $filter: ModelSubscriptionEventAgendaItemFilterInput
) {
  onUpdateEventAgendaItem(filter: $filter) {
    id
    title
    description
    location
    type
    start
    end
    speakers {
      nextToken
      __typename
    }
    agenda {
      id
      createdAt
      updatedAt
      eventAgendaEventId
      __typename
    }
    createdAt
    updatedAt
    eventAgendaItemsId
    eventSpeakerAgendaItemsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventAgendaItemSubscriptionVariables,
  APITypes.OnUpdateEventAgendaItemSubscription
>;
export const onDeleteEventAgendaItem = /* GraphQL */ `subscription OnDeleteEventAgendaItem(
  $filter: ModelSubscriptionEventAgendaItemFilterInput
) {
  onDeleteEventAgendaItem(filter: $filter) {
    id
    title
    description
    location
    type
    start
    end
    speakers {
      nextToken
      __typename
    }
    agenda {
      id
      createdAt
      updatedAt
      eventAgendaEventId
      __typename
    }
    createdAt
    updatedAt
    eventAgendaItemsId
    eventSpeakerAgendaItemsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventAgendaItemSubscriptionVariables,
  APITypes.OnDeleteEventAgendaItemSubscription
>;
export const onCreateEventSpeaker = /* GraphQL */ `subscription OnCreateEventSpeaker(
  $filter: ModelSubscriptionEventSpeakerFilterInput
) {
  onCreateEventSpeaker(filter: $filter) {
    id
    name
    title
    company
    email
    image
    logo
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    agendaItems {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    eventTemplateSpeakersId
    eventAgendaItemSpeakersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventSpeakerSubscriptionVariables,
  APITypes.OnCreateEventSpeakerSubscription
>;
export const onUpdateEventSpeaker = /* GraphQL */ `subscription OnUpdateEventSpeaker(
  $filter: ModelSubscriptionEventSpeakerFilterInput
) {
  onUpdateEventSpeaker(filter: $filter) {
    id
    name
    title
    company
    email
    image
    logo
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    agendaItems {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    eventTemplateSpeakersId
    eventAgendaItemSpeakersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventSpeakerSubscriptionVariables,
  APITypes.OnUpdateEventSpeakerSubscription
>;
export const onDeleteEventSpeaker = /* GraphQL */ `subscription OnDeleteEventSpeaker(
  $filter: ModelSubscriptionEventSpeakerFilterInput
) {
  onDeleteEventSpeaker(filter: $filter) {
    id
    name
    title
    company
    email
    image
    logo
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    agendaItems {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    eventTemplateSpeakersId
    eventAgendaItemSpeakersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventSpeakerSubscriptionVariables,
  APITypes.OnDeleteEventSpeakerSubscription
>;
export const onCreateEventClick = /* GraphQL */ `subscription OnCreateEventClick(
  $filter: ModelSubscriptionEventClickFilterInput
) {
  onCreateEventClick(filter: $filter) {
    id
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    page
    ipAddress
    country
    email
    type
    object
    objectId
    createdAt
    updatedAt
    eventTemplateClicksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventClickSubscriptionVariables,
  APITypes.OnCreateEventClickSubscription
>;
export const onUpdateEventClick = /* GraphQL */ `subscription OnUpdateEventClick(
  $filter: ModelSubscriptionEventClickFilterInput
) {
  onUpdateEventClick(filter: $filter) {
    id
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    page
    ipAddress
    country
    email
    type
    object
    objectId
    createdAt
    updatedAt
    eventTemplateClicksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventClickSubscriptionVariables,
  APITypes.OnUpdateEventClickSubscription
>;
export const onDeleteEventClick = /* GraphQL */ `subscription OnDeleteEventClick(
  $filter: ModelSubscriptionEventClickFilterInput
) {
  onDeleteEventClick(filter: $filter) {
    id
    event {
      id
      title
      startDate
      endDate
      description
      location
      hero
      link
      slug
      logo
      createdAt
      updatedAt
      eventTemplateAgendaId
      __typename
    }
    page
    ipAddress
    country
    email
    type
    object
    objectId
    createdAt
    updatedAt
    eventTemplateClicksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventClickSubscriptionVariables,
  APITypes.OnDeleteEventClickSubscription
>;
export const onCreateCertificateClick = /* GraphQL */ `subscription OnCreateCertificateClick(
  $filter: ModelSubscriptionCertificateClickFilterInput
) {
  onCreateCertificateClick(filter: $filter) {
    id
    page
    ipAddress
    country
    type
    object
    device
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCertificateClickSubscriptionVariables,
  APITypes.OnCreateCertificateClickSubscription
>;
export const onUpdateCertificateClick = /* GraphQL */ `subscription OnUpdateCertificateClick(
  $filter: ModelSubscriptionCertificateClickFilterInput
) {
  onUpdateCertificateClick(filter: $filter) {
    id
    page
    ipAddress
    country
    type
    object
    device
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCertificateClickSubscriptionVariables,
  APITypes.OnUpdateCertificateClickSubscription
>;
export const onDeleteCertificateClick = /* GraphQL */ `subscription OnDeleteCertificateClick(
  $filter: ModelSubscriptionCertificateClickFilterInput
) {
  onDeleteCertificateClick(filter: $filter) {
    id
    page
    ipAddress
    country
    type
    object
    device
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCertificateClickSubscriptionVariables,
  APITypes.OnDeleteCertificateClickSubscription
>;
export const onCreateIndexClick = /* GraphQL */ `subscription OnCreateIndexClick(
  $filter: ModelSubscriptionIndexClickFilterInput
) {
  onCreateIndexClick(filter: $filter) {
    id
    page
    ipAddress
    country
    type
    device
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIndexClickSubscriptionVariables,
  APITypes.OnCreateIndexClickSubscription
>;
export const onUpdateIndexClick = /* GraphQL */ `subscription OnUpdateIndexClick(
  $filter: ModelSubscriptionIndexClickFilterInput
) {
  onUpdateIndexClick(filter: $filter) {
    id
    page
    ipAddress
    country
    type
    device
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIndexClickSubscriptionVariables,
  APITypes.OnUpdateIndexClickSubscription
>;
export const onDeleteIndexClick = /* GraphQL */ `subscription OnDeleteIndexClick(
  $filter: ModelSubscriptionIndexClickFilterInput
) {
  onDeleteIndexClick(filter: $filter) {
    id
    page
    ipAddress
    country
    type
    device
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIndexClickSubscriptionVariables,
  APITypes.OnDeleteIndexClickSubscription
>;
export const onCreateEmailSubscription = /* GraphQL */ `subscription OnCreateEmailSubscription(
  $filter: ModelSubscriptionEmailSubscriptionFilterInput
) {
  onCreateEmailSubscription(filter: $filter) {
    id
    email
    ipAddress
    country
    device
    page
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEmailSubscriptionSubscriptionVariables,
  APITypes.OnCreateEmailSubscriptionSubscription
>;
export const onUpdateEmailSubscription = /* GraphQL */ `subscription OnUpdateEmailSubscription(
  $filter: ModelSubscriptionEmailSubscriptionFilterInput
) {
  onUpdateEmailSubscription(filter: $filter) {
    id
    email
    ipAddress
    country
    device
    page
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEmailSubscriptionSubscriptionVariables,
  APITypes.OnUpdateEmailSubscriptionSubscription
>;
export const onDeleteEmailSubscription = /* GraphQL */ `subscription OnDeleteEmailSubscription(
  $filter: ModelSubscriptionEmailSubscriptionFilterInput
) {
  onDeleteEmailSubscription(filter: $filter) {
    id
    email
    ipAddress
    country
    device
    page
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEmailSubscriptionSubscriptionVariables,
  APITypes.OnDeleteEmailSubscriptionSubscription
>;
export const onCreateImageObject = /* GraphQL */ `subscription OnCreateImageObject(
  $filter: ModelSubscriptionImageObjectFilterInput
) {
  onCreateImageObject(filter: $filter) {
    id
    url
    caption
    uploadedBy
    alt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateImageObjectSubscriptionVariables,
  APITypes.OnCreateImageObjectSubscription
>;
export const onUpdateImageObject = /* GraphQL */ `subscription OnUpdateImageObject(
  $filter: ModelSubscriptionImageObjectFilterInput
) {
  onUpdateImageObject(filter: $filter) {
    id
    url
    caption
    uploadedBy
    alt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateImageObjectSubscriptionVariables,
  APITypes.OnUpdateImageObjectSubscription
>;
export const onDeleteImageObject = /* GraphQL */ `subscription OnDeleteImageObject(
  $filter: ModelSubscriptionImageObjectFilterInput
) {
  onDeleteImageObject(filter: $filter) {
    id
    url
    caption
    uploadedBy
    alt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteImageObjectSubscriptionVariables,
  APITypes.OnDeleteImageObjectSubscription
>;
export const onCreatePurchase = /* GraphQL */ `subscription OnCreatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onCreatePurchase(filter: $filter) {
    id
    email
    name
    company
    title
    phone
    address
    zip
    state
    city
    country
    code
    status
    total
    subtotal
    shippingMethod
    shipping
    tax
    items
    paymentConfirmation
    paymentMethod
    paymentLast4
    printfulConfirmed
    printfulOrderId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePurchaseSubscriptionVariables,
  APITypes.OnCreatePurchaseSubscription
>;
export const onUpdatePurchase = /* GraphQL */ `subscription OnUpdatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onUpdatePurchase(filter: $filter) {
    id
    email
    name
    company
    title
    phone
    address
    zip
    state
    city
    country
    code
    status
    total
    subtotal
    shippingMethod
    shipping
    tax
    items
    paymentConfirmation
    paymentMethod
    paymentLast4
    printfulConfirmed
    printfulOrderId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePurchaseSubscriptionVariables,
  APITypes.OnUpdatePurchaseSubscription
>;
export const onDeletePurchase = /* GraphQL */ `subscription OnDeletePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onDeletePurchase(filter: $filter) {
    id
    email
    name
    company
    title
    phone
    address
    zip
    state
    city
    country
    code
    status
    total
    subtotal
    shippingMethod
    shipping
    tax
    items
    paymentConfirmation
    paymentMethod
    paymentLast4
    printfulConfirmed
    printfulOrderId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePurchaseSubscriptionVariables,
  APITypes.OnDeletePurchaseSubscription
>;
export const onCreateAnalysis = /* GraphQL */ `subscription OnCreateAnalysis($filter: ModelSubscriptionAnalysisFilterInput) {
  onCreateAnalysis(filter: $filter) {
    id
    wordCount
    readingTime
    quizQuestion
    quizOptions
    quizCorrectAnswer
    lessonId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAnalysisSubscriptionVariables,
  APITypes.OnCreateAnalysisSubscription
>;
export const onUpdateAnalysis = /* GraphQL */ `subscription OnUpdateAnalysis($filter: ModelSubscriptionAnalysisFilterInput) {
  onUpdateAnalysis(filter: $filter) {
    id
    wordCount
    readingTime
    quizQuestion
    quizOptions
    quizCorrectAnswer
    lessonId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAnalysisSubscriptionVariables,
  APITypes.OnUpdateAnalysisSubscription
>;
export const onDeleteAnalysis = /* GraphQL */ `subscription OnDeleteAnalysis($filter: ModelSubscriptionAnalysisFilterInput) {
  onDeleteAnalysis(filter: $filter) {
    id
    wordCount
    readingTime
    quizQuestion
    quizOptions
    quizCorrectAnswer
    lessonId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAnalysisSubscriptionVariables,
  APITypes.OnDeleteAnalysisSubscription
>;
export const onCreateAchievement = /* GraphQL */ `subscription OnCreateAchievement(
  $filter: ModelSubscriptionAchievementFilterInput
) {
  onCreateAchievement(filter: $filter) {
    id
    title
    description
    image
    courses {
      nextToken
      __typename
    }
    coursesRequired
    users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAchievementSubscriptionVariables,
  APITypes.OnCreateAchievementSubscription
>;
export const onUpdateAchievement = /* GraphQL */ `subscription OnUpdateAchievement(
  $filter: ModelSubscriptionAchievementFilterInput
) {
  onUpdateAchievement(filter: $filter) {
    id
    title
    description
    image
    courses {
      nextToken
      __typename
    }
    coursesRequired
    users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAchievementSubscriptionVariables,
  APITypes.OnUpdateAchievementSubscription
>;
export const onDeleteAchievement = /* GraphQL */ `subscription OnDeleteAchievement(
  $filter: ModelSubscriptionAchievementFilterInput
) {
  onDeleteAchievement(filter: $filter) {
    id
    title
    description
    image
    courses {
      nextToken
      __typename
    }
    coursesRequired
    users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAchievementSubscriptionVariables,
  APITypes.OnDeleteAchievementSubscription
>;
export const onCreateTest = /* GraphQL */ `subscription OnCreateTest($filter: ModelSubscriptionTestFilterInput) {
  onCreateTest(filter: $filter) {
    id
    name
    email
    totalTasks
    tasks {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTestSubscriptionVariables,
  APITypes.OnCreateTestSubscription
>;
export const onUpdateTest = /* GraphQL */ `subscription OnUpdateTest($filter: ModelSubscriptionTestFilterInput) {
  onUpdateTest(filter: $filter) {
    id
    name
    email
    totalTasks
    tasks {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTestSubscriptionVariables,
  APITypes.OnUpdateTestSubscription
>;
export const onDeleteTest = /* GraphQL */ `subscription OnDeleteTest($filter: ModelSubscriptionTestFilterInput) {
  onDeleteTest(filter: $filter) {
    id
    name
    email
    totalTasks
    tasks {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTestSubscriptionVariables,
  APITypes.OnDeleteTestSubscription
>;
export const onCreateTestTask = /* GraphQL */ `subscription OnCreateTestTask($filter: ModelSubscriptionTestTaskFilterInput) {
  onCreateTestTask(filter: $filter) {
    id
    test {
      id
      name
      email
      totalTasks
      createdAt
      updatedAt
      __typename
    }
    task
    completed
    completedDate
    createdAt
    updatedAt
    testTasksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTestTaskSubscriptionVariables,
  APITypes.OnCreateTestTaskSubscription
>;
export const onUpdateTestTask = /* GraphQL */ `subscription OnUpdateTestTask($filter: ModelSubscriptionTestTaskFilterInput) {
  onUpdateTestTask(filter: $filter) {
    id
    test {
      id
      name
      email
      totalTasks
      createdAt
      updatedAt
      __typename
    }
    task
    completed
    completedDate
    createdAt
    updatedAt
    testTasksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTestTaskSubscriptionVariables,
  APITypes.OnUpdateTestTaskSubscription
>;
export const onDeleteTestTask = /* GraphQL */ `subscription OnDeleteTestTask($filter: ModelSubscriptionTestTaskFilterInput) {
  onDeleteTestTask(filter: $filter) {
    id
    test {
      id
      name
      email
      totalTasks
      createdAt
      updatedAt
      __typename
    }
    task
    completed
    completedDate
    createdAt
    updatedAt
    testTasksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTestTaskSubscriptionVariables,
  APITypes.OnDeleteTestTaskSubscription
>;
export const onCreateCourseReview = /* GraphQL */ `subscription OnCreateCourseReview(
  $filter: ModelSubscriptionCourseReviewFilterInput
) {
  onCreateCourseReview(filter: $filter) {
    id
    course {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    review
    rating
    createdAt
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    userID
    thinkificId
    updatedAt
    userReviewsId
    lMSCourseReviewsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCourseReviewSubscriptionVariables,
  APITypes.OnCreateCourseReviewSubscription
>;
export const onUpdateCourseReview = /* GraphQL */ `subscription OnUpdateCourseReview(
  $filter: ModelSubscriptionCourseReviewFilterInput
) {
  onUpdateCourseReview(filter: $filter) {
    id
    course {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    review
    rating
    createdAt
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    userID
    thinkificId
    updatedAt
    userReviewsId
    lMSCourseReviewsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCourseReviewSubscriptionVariables,
  APITypes.OnUpdateCourseReviewSubscription
>;
export const onDeleteCourseReview = /* GraphQL */ `subscription OnDeleteCourseReview(
  $filter: ModelSubscriptionCourseReviewFilterInput
) {
  onDeleteCourseReview(filter: $filter) {
    id
    course {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    review
    rating
    createdAt
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    userID
    thinkificId
    updatedAt
    userReviewsId
    lMSCourseReviewsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCourseReviewSubscriptionVariables,
  APITypes.OnDeleteCourseReviewSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
    id
    email
    name
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    userID
    total
    status
    courseName
    courseLink
    courseImage
    courseDiscount
    courseDescription
    type
    paymentPlan
    ipAddress
    country
    device
    page
    createdAt
    updatedAt
    userOrdersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
    id
    email
    name
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    userID
    total
    status
    courseName
    courseLink
    courseImage
    courseDiscount
    courseDescription
    type
    paymentPlan
    ipAddress
    country
    device
    page
    createdAt
    updatedAt
    userOrdersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
    id
    email
    name
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    userID
    total
    status
    courseName
    courseLink
    courseImage
    courseDiscount
    courseDescription
    type
    paymentPlan
    ipAddress
    country
    device
    page
    createdAt
    updatedAt
    userOrdersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onCreateSearchLog = /* GraphQL */ `subscription OnCreateSearchLog($filter: ModelSubscriptionSearchLogFilterInput) {
  onCreateSearchLog(filter: $filter) {
    id
    timestamp
    query
    results_count
    results {
      id
      score
      title
      link
      __typename
    }
    answer
    model
    collection
    response_time_ms
    user_rating
    rating_comment
    rating_timestamp
    helpful
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSearchLogSubscriptionVariables,
  APITypes.OnCreateSearchLogSubscription
>;
export const onUpdateSearchLog = /* GraphQL */ `subscription OnUpdateSearchLog($filter: ModelSubscriptionSearchLogFilterInput) {
  onUpdateSearchLog(filter: $filter) {
    id
    timestamp
    query
    results_count
    results {
      id
      score
      title
      link
      __typename
    }
    answer
    model
    collection
    response_time_ms
    user_rating
    rating_comment
    rating_timestamp
    helpful
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSearchLogSubscriptionVariables,
  APITypes.OnUpdateSearchLogSubscription
>;
export const onDeleteSearchLog = /* GraphQL */ `subscription OnDeleteSearchLog($filter: ModelSubscriptionSearchLogFilterInput) {
  onDeleteSearchLog(filter: $filter) {
    id
    timestamp
    query
    results_count
    results {
      id
      score
      title
      link
      __typename
    }
    answer
    model
    collection
    response_time_ms
    user_rating
    rating_comment
    rating_timestamp
    helpful
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSearchLogSubscriptionVariables,
  APITypes.OnDeleteSearchLogSubscription
>;
export const onCreatePartner = /* GraphQL */ `subscription OnCreatePartner($filter: ModelSubscriptionPartnerFilterInput) {
  onCreatePartner(filter: $filter) {
    id
    name
    image
    link
    courses {
      nextToken
      __typename
    }
    admins {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePartnerSubscriptionVariables,
  APITypes.OnCreatePartnerSubscription
>;
export const onUpdatePartner = /* GraphQL */ `subscription OnUpdatePartner($filter: ModelSubscriptionPartnerFilterInput) {
  onUpdatePartner(filter: $filter) {
    id
    name
    image
    link
    courses {
      nextToken
      __typename
    }
    admins {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePartnerSubscriptionVariables,
  APITypes.OnUpdatePartnerSubscription
>;
export const onDeletePartner = /* GraphQL */ `subscription OnDeletePartner($filter: ModelSubscriptionPartnerFilterInput) {
  onDeletePartner(filter: $filter) {
    id
    name
    image
    link
    courses {
      nextToken
      __typename
    }
    admins {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePartnerSubscriptionVariables,
  APITypes.OnDeletePartnerSubscription
>;
export const onCreatePartnerAdmin = /* GraphQL */ `subscription OnCreatePartnerAdmin(
  $filter: ModelSubscriptionPartnerAdminFilterInput
) {
  onCreatePartnerAdmin(filter: $filter) {
    id
    name
    email
    password
    partner {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePartnerAdminSubscriptionVariables,
  APITypes.OnCreatePartnerAdminSubscription
>;
export const onUpdatePartnerAdmin = /* GraphQL */ `subscription OnUpdatePartnerAdmin(
  $filter: ModelSubscriptionPartnerAdminFilterInput
) {
  onUpdatePartnerAdmin(filter: $filter) {
    id
    name
    email
    password
    partner {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePartnerAdminSubscriptionVariables,
  APITypes.OnUpdatePartnerAdminSubscription
>;
export const onDeletePartnerAdmin = /* GraphQL */ `subscription OnDeletePartnerAdmin(
  $filter: ModelSubscriptionPartnerAdminFilterInput
) {
  onDeletePartnerAdmin(filter: $filter) {
    id
    name
    email
    password
    partner {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePartnerAdminSubscriptionVariables,
  APITypes.OnDeletePartnerAdminSubscription
>;
export const onCreateLibrarySurvey = /* GraphQL */ `subscription OnCreateLibrarySurvey(
  $filter: ModelSubscriptionLibrarySurveyFilterInput
) {
  onCreateLibrarySurvey(filter: $filter) {
    id
    company
    options
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLibrarySurveySubscriptionVariables,
  APITypes.OnCreateLibrarySurveySubscription
>;
export const onUpdateLibrarySurvey = /* GraphQL */ `subscription OnUpdateLibrarySurvey(
  $filter: ModelSubscriptionLibrarySurveyFilterInput
) {
  onUpdateLibrarySurvey(filter: $filter) {
    id
    company
    options
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLibrarySurveySubscriptionVariables,
  APITypes.OnUpdateLibrarySurveySubscription
>;
export const onDeleteLibrarySurvey = /* GraphQL */ `subscription OnDeleteLibrarySurvey(
  $filter: ModelSubscriptionLibrarySurveyFilterInput
) {
  onDeleteLibrarySurvey(filter: $filter) {
    id
    company
    options
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLibrarySurveySubscriptionVariables,
  APITypes.OnDeleteLibrarySurveySubscription
>;
export const onCreateCyberMondayCode = /* GraphQL */ `subscription OnCreateCyberMondayCode(
  $filter: ModelSubscriptionCyberMondayCodeFilterInput
) {
  onCreateCyberMondayCode(filter: $filter) {
    id
    code
    usedBy
    dayValid
    dayUsed
    isUsed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCyberMondayCodeSubscriptionVariables,
  APITypes.OnCreateCyberMondayCodeSubscription
>;
export const onUpdateCyberMondayCode = /* GraphQL */ `subscription OnUpdateCyberMondayCode(
  $filter: ModelSubscriptionCyberMondayCodeFilterInput
) {
  onUpdateCyberMondayCode(filter: $filter) {
    id
    code
    usedBy
    dayValid
    dayUsed
    isUsed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCyberMondayCodeSubscriptionVariables,
  APITypes.OnUpdateCyberMondayCodeSubscription
>;
export const onDeleteCyberMondayCode = /* GraphQL */ `subscription OnDeleteCyberMondayCode(
  $filter: ModelSubscriptionCyberMondayCodeFilterInput
) {
  onDeleteCyberMondayCode(filter: $filter) {
    id
    code
    usedBy
    dayValid
    dayUsed
    isUsed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCyberMondayCodeSubscriptionVariables,
  APITypes.OnDeleteCyberMondayCodeSubscription
>;
export const onCreateApprovedAPS25MediaPage = /* GraphQL */ `subscription OnCreateApprovedAPS25MediaPage(
  $filter: ModelSubscriptionApprovedAPS25MediaPageFilterInput
) {
  onCreateApprovedAPS25MediaPage(filter: $filter) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateApprovedAPS25MediaPageSubscriptionVariables,
  APITypes.OnCreateApprovedAPS25MediaPageSubscription
>;
export const onUpdateApprovedAPS25MediaPage = /* GraphQL */ `subscription OnUpdateApprovedAPS25MediaPage(
  $filter: ModelSubscriptionApprovedAPS25MediaPageFilterInput
) {
  onUpdateApprovedAPS25MediaPage(filter: $filter) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateApprovedAPS25MediaPageSubscriptionVariables,
  APITypes.OnUpdateApprovedAPS25MediaPageSubscription
>;
export const onDeleteApprovedAPS25MediaPage = /* GraphQL */ `subscription OnDeleteApprovedAPS25MediaPage(
  $filter: ModelSubscriptionApprovedAPS25MediaPageFilterInput
) {
  onDeleteApprovedAPS25MediaPage(filter: $filter) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteApprovedAPS25MediaPageSubscriptionVariables,
  APITypes.OnDeleteApprovedAPS25MediaPageSubscription
>;
export const onCreateCourseOutlineRequest = /* GraphQL */ `subscription OnCreateCourseOutlineRequest(
  $filter: ModelSubscriptionCourseOutlineRequestFilterInput
) {
  onCreateCourseOutlineRequest(filter: $filter) {
    id
    email
    name
    ipAddress
    country
    device
    page
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCourseOutlineRequestSubscriptionVariables,
  APITypes.OnCreateCourseOutlineRequestSubscription
>;
export const onUpdateCourseOutlineRequest = /* GraphQL */ `subscription OnUpdateCourseOutlineRequest(
  $filter: ModelSubscriptionCourseOutlineRequestFilterInput
) {
  onUpdateCourseOutlineRequest(filter: $filter) {
    id
    email
    name
    ipAddress
    country
    device
    page
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCourseOutlineRequestSubscriptionVariables,
  APITypes.OnUpdateCourseOutlineRequestSubscription
>;
export const onDeleteCourseOutlineRequest = /* GraphQL */ `subscription OnDeleteCourseOutlineRequest(
  $filter: ModelSubscriptionCourseOutlineRequestFilterInput
) {
  onDeleteCourseOutlineRequest(filter: $filter) {
    id
    email
    name
    ipAddress
    country
    device
    page
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCourseOutlineRequestSubscriptionVariables,
  APITypes.OnDeleteCourseOutlineRequestSubscription
>;
export const onCreateUserGameStats = /* GraphQL */ `subscription OnCreateUserGameStats(
  $filter: ModelSubscriptionUserGameStatsFilterInput
) {
  onCreateUserGameStats(filter: $filter) {
    id
    userID
    bestStreakAllTime
    totalAttempts
    totalCorrect
    lastPlayedAt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserGameStatsSubscriptionVariables,
  APITypes.OnCreateUserGameStatsSubscription
>;
export const onUpdateUserGameStats = /* GraphQL */ `subscription OnUpdateUserGameStats(
  $filter: ModelSubscriptionUserGameStatsFilterInput
) {
  onUpdateUserGameStats(filter: $filter) {
    id
    userID
    bestStreakAllTime
    totalAttempts
    totalCorrect
    lastPlayedAt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserGameStatsSubscriptionVariables,
  APITypes.OnUpdateUserGameStatsSubscription
>;
export const onDeleteUserGameStats = /* GraphQL */ `subscription OnDeleteUserGameStats(
  $filter: ModelSubscriptionUserGameStatsFilterInput
) {
  onDeleteUserGameStats(filter: $filter) {
    id
    userID
    bestStreakAllTime
    totalAttempts
    totalCorrect
    lastPlayedAt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserGameStatsSubscriptionVariables,
  APITypes.OnDeleteUserGameStatsSubscription
>;
export const onCreateLeaderboardEntry = /* GraphQL */ `subscription OnCreateLeaderboardEntry(
  $filter: ModelSubscriptionLeaderboardEntryFilterInput
) {
  onCreateLeaderboardEntry(filter: $filter) {
    id
    period
    key
    sortKey
    userID
    displayName
    avatarUrl
    score
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLeaderboardEntrySubscriptionVariables,
  APITypes.OnCreateLeaderboardEntrySubscription
>;
export const onUpdateLeaderboardEntry = /* GraphQL */ `subscription OnUpdateLeaderboardEntry(
  $filter: ModelSubscriptionLeaderboardEntryFilterInput
) {
  onUpdateLeaderboardEntry(filter: $filter) {
    id
    period
    key
    sortKey
    userID
    displayName
    avatarUrl
    score
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLeaderboardEntrySubscriptionVariables,
  APITypes.OnUpdateLeaderboardEntrySubscription
>;
export const onDeleteLeaderboardEntry = /* GraphQL */ `subscription OnDeleteLeaderboardEntry(
  $filter: ModelSubscriptionLeaderboardEntryFilterInput
) {
  onDeleteLeaderboardEntry(filter: $filter) {
    id
    period
    key
    sortKey
    userID
    displayName
    avatarUrl
    score
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLeaderboardEntrySubscriptionVariables,
  APITypes.OnDeleteLeaderboardEntrySubscription
>;
export const onCreateAnswerEvent = /* GraphQL */ `subscription OnCreateAnswerEvent(
  $filter: ModelSubscriptionAnswerEventFilterInput
) {
  onCreateAnswerEvent(filter: $filter) {
    id
    userID
    termID
    correct
    latencyMs
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAnswerEventSubscriptionVariables,
  APITypes.OnCreateAnswerEventSubscription
>;
export const onUpdateAnswerEvent = /* GraphQL */ `subscription OnUpdateAnswerEvent(
  $filter: ModelSubscriptionAnswerEventFilterInput
) {
  onUpdateAnswerEvent(filter: $filter) {
    id
    userID
    termID
    correct
    latencyMs
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAnswerEventSubscriptionVariables,
  APITypes.OnUpdateAnswerEventSubscription
>;
export const onDeleteAnswerEvent = /* GraphQL */ `subscription OnDeleteAnswerEvent(
  $filter: ModelSubscriptionAnswerEventFilterInput
) {
  onDeleteAnswerEvent(filter: $filter) {
    id
    userID
    termID
    correct
    latencyMs
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAnswerEventSubscriptionVariables,
  APITypes.OnDeleteAnswerEventSubscription
>;
export const onCreateLessonTags = /* GraphQL */ `subscription OnCreateLessonTags(
  $filter: ModelSubscriptionLessonTagsFilterInput
) {
  onCreateLessonTags(filter: $filter) {
    id
    tagsId
    lessonId
    tags {
      id
      tag
      createdAt
      updatedAt
      __typename
    }
    lesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      screengrab
      seoDescription
      seoKeywords
      seoTitle
      seoUrl
      seoRobots
      seoFollow
      createdAt
      updatedAt
      lessonAnalysisId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLessonTagsSubscriptionVariables,
  APITypes.OnCreateLessonTagsSubscription
>;
export const onUpdateLessonTags = /* GraphQL */ `subscription OnUpdateLessonTags(
  $filter: ModelSubscriptionLessonTagsFilterInput
) {
  onUpdateLessonTags(filter: $filter) {
    id
    tagsId
    lessonId
    tags {
      id
      tag
      createdAt
      updatedAt
      __typename
    }
    lesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      screengrab
      seoDescription
      seoKeywords
      seoTitle
      seoUrl
      seoRobots
      seoFollow
      createdAt
      updatedAt
      lessonAnalysisId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLessonTagsSubscriptionVariables,
  APITypes.OnUpdateLessonTagsSubscription
>;
export const onDeleteLessonTags = /* GraphQL */ `subscription OnDeleteLessonTags(
  $filter: ModelSubscriptionLessonTagsFilterInput
) {
  onDeleteLessonTags(filter: $filter) {
    id
    tagsId
    lessonId
    tags {
      id
      tag
      createdAt
      updatedAt
      __typename
    }
    lesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      screengrab
      seoDescription
      seoKeywords
      seoTitle
      seoUrl
      seoRobots
      seoFollow
      createdAt
      updatedAt
      lessonAnalysisId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLessonTagsSubscriptionVariables,
  APITypes.OnDeleteLessonTagsSubscription
>;
export const onCreateCertificateByCategory = /* GraphQL */ `subscription OnCreateCertificateByCategory(
  $filter: ModelSubscriptionCertificateByCategoryFilterInput
) {
  onCreateCertificateByCategory(filter: $filter) {
    id
    categoryId
    certificateObjectId
    category {
      id
      name
      value
      createdAt
      updatedAt
      __typename
    }
    certificateObject {
      id
      courseId
      title
      description
      seoImage
      hours
      courses
      video
      price
      link
      applicationLink
      callout
      purchaseLink
      categoryArray
      abbreviation
      whereText
      whatText
      howText
      deadline
      subscriptionLink
      subscriptionPrice
      status
      displayOrder
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCertificateByCategorySubscriptionVariables,
  APITypes.OnCreateCertificateByCategorySubscription
>;
export const onUpdateCertificateByCategory = /* GraphQL */ `subscription OnUpdateCertificateByCategory(
  $filter: ModelSubscriptionCertificateByCategoryFilterInput
) {
  onUpdateCertificateByCategory(filter: $filter) {
    id
    categoryId
    certificateObjectId
    category {
      id
      name
      value
      createdAt
      updatedAt
      __typename
    }
    certificateObject {
      id
      courseId
      title
      description
      seoImage
      hours
      courses
      video
      price
      link
      applicationLink
      callout
      purchaseLink
      categoryArray
      abbreviation
      whereText
      whatText
      howText
      deadline
      subscriptionLink
      subscriptionPrice
      status
      displayOrder
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCertificateByCategorySubscriptionVariables,
  APITypes.OnUpdateCertificateByCategorySubscription
>;
export const onDeleteCertificateByCategory = /* GraphQL */ `subscription OnDeleteCertificateByCategory(
  $filter: ModelSubscriptionCertificateByCategoryFilterInput
) {
  onDeleteCertificateByCategory(filter: $filter) {
    id
    categoryId
    certificateObjectId
    category {
      id
      name
      value
      createdAt
      updatedAt
      __typename
    }
    certificateObject {
      id
      courseId
      title
      description
      seoImage
      hours
      courses
      video
      price
      link
      applicationLink
      callout
      purchaseLink
      categoryArray
      abbreviation
      whereText
      whatText
      howText
      deadline
      subscriptionLink
      subscriptionPrice
      status
      displayOrder
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCertificateByCategorySubscriptionVariables,
  APITypes.OnDeleteCertificateByCategorySubscription
>;
export const onCreateCertificateCourses = /* GraphQL */ `subscription OnCreateCertificateCourses(
  $filter: ModelSubscriptionCertificateCoursesFilterInput
) {
  onCreateCertificateCourses(filter: $filter) {
    id
    certificateId
    courseId
    certificate {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
      __typename
    }
    course {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCertificateCoursesSubscriptionVariables,
  APITypes.OnCreateCertificateCoursesSubscription
>;
export const onUpdateCertificateCourses = /* GraphQL */ `subscription OnUpdateCertificateCourses(
  $filter: ModelSubscriptionCertificateCoursesFilterInput
) {
  onUpdateCertificateCourses(filter: $filter) {
    id
    certificateId
    courseId
    certificate {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
      __typename
    }
    course {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCertificateCoursesSubscriptionVariables,
  APITypes.OnUpdateCertificateCoursesSubscription
>;
export const onDeleteCertificateCourses = /* GraphQL */ `subscription OnDeleteCertificateCourses(
  $filter: ModelSubscriptionCertificateCoursesFilterInput
) {
  onDeleteCertificateCourses(filter: $filter) {
    id
    certificateId
    courseId
    certificate {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
      __typename
    }
    course {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCertificateCoursesSubscriptionVariables,
  APITypes.OnDeleteCertificateCoursesSubscription
>;
export const onCreateArticleRelatedCourses = /* GraphQL */ `subscription OnCreateArticleRelatedCourses(
  $filter: ModelSubscriptionArticleRelatedCoursesFilterInput
) {
  onCreateArticleRelatedCourses(filter: $filter) {
    id
    courseId
    articleId
    course {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      createdAt
      updatedAt
      __typename
    }
    article {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateArticleRelatedCoursesSubscriptionVariables,
  APITypes.OnCreateArticleRelatedCoursesSubscription
>;
export const onUpdateArticleRelatedCourses = /* GraphQL */ `subscription OnUpdateArticleRelatedCourses(
  $filter: ModelSubscriptionArticleRelatedCoursesFilterInput
) {
  onUpdateArticleRelatedCourses(filter: $filter) {
    id
    courseId
    articleId
    course {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      createdAt
      updatedAt
      __typename
    }
    article {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateArticleRelatedCoursesSubscriptionVariables,
  APITypes.OnUpdateArticleRelatedCoursesSubscription
>;
export const onDeleteArticleRelatedCourses = /* GraphQL */ `subscription OnDeleteArticleRelatedCourses(
  $filter: ModelSubscriptionArticleRelatedCoursesFilterInput
) {
  onDeleteArticleRelatedCourses(filter: $filter) {
    id
    courseId
    articleId
    course {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      createdAt
      updatedAt
      __typename
    }
    article {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteArticleRelatedCoursesSubscriptionVariables,
  APITypes.OnDeleteArticleRelatedCoursesSubscription
>;
export const onCreateUserCompletedLessons = /* GraphQL */ `subscription OnCreateUserCompletedLessons(
  $filter: ModelSubscriptionUserCompletedLessonsFilterInput
) {
  onCreateUserCompletedLessons(filter: $filter) {
    id
    lessonId
    userId
    lesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      screengrab
      seoDescription
      seoKeywords
      seoTitle
      seoUrl
      seoRobots
      seoFollow
      createdAt
      updatedAt
      lessonAnalysisId
      __typename
    }
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserCompletedLessonsSubscriptionVariables,
  APITypes.OnCreateUserCompletedLessonsSubscription
>;
export const onUpdateUserCompletedLessons = /* GraphQL */ `subscription OnUpdateUserCompletedLessons(
  $filter: ModelSubscriptionUserCompletedLessonsFilterInput
) {
  onUpdateUserCompletedLessons(filter: $filter) {
    id
    lessonId
    userId
    lesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      screengrab
      seoDescription
      seoKeywords
      seoTitle
      seoUrl
      seoRobots
      seoFollow
      createdAt
      updatedAt
      lessonAnalysisId
      __typename
    }
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserCompletedLessonsSubscriptionVariables,
  APITypes.OnUpdateUserCompletedLessonsSubscription
>;
export const onDeleteUserCompletedLessons = /* GraphQL */ `subscription OnDeleteUserCompletedLessons(
  $filter: ModelSubscriptionUserCompletedLessonsFilterInput
) {
  onDeleteUserCompletedLessons(filter: $filter) {
    id
    lessonId
    userId
    lesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      author
      status
      related
      featured
      backdate
      createdBy
      lastEditedBy
      videoLink
      screengrab
      seoDescription
      seoKeywords
      seoTitle
      seoUrl
      seoRobots
      seoFollow
      createdAt
      updatedAt
      lessonAnalysisId
      __typename
    }
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserCompletedLessonsSubscriptionVariables,
  APITypes.OnDeleteUserCompletedLessonsSubscription
>;
export const onCreateAuthorTemplates = /* GraphQL */ `subscription OnCreateAuthorTemplates(
  $filter: ModelSubscriptionAuthorTemplatesFilterInput
) {
  onCreateAuthorTemplates(filter: $filter) {
    id
    authorId
    indexTemplateId
    author {
      id
      name
      headshot
      linkedIn
      title
      company
      createdAt
      updatedAt
      __typename
    }
    indexTemplate {
      id
      slug
      title
      subhead
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAuthorTemplatesSubscriptionVariables,
  APITypes.OnCreateAuthorTemplatesSubscription
>;
export const onUpdateAuthorTemplates = /* GraphQL */ `subscription OnUpdateAuthorTemplates(
  $filter: ModelSubscriptionAuthorTemplatesFilterInput
) {
  onUpdateAuthorTemplates(filter: $filter) {
    id
    authorId
    indexTemplateId
    author {
      id
      name
      headshot
      linkedIn
      title
      company
      createdAt
      updatedAt
      __typename
    }
    indexTemplate {
      id
      slug
      title
      subhead
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAuthorTemplatesSubscriptionVariables,
  APITypes.OnUpdateAuthorTemplatesSubscription
>;
export const onDeleteAuthorTemplates = /* GraphQL */ `subscription OnDeleteAuthorTemplates(
  $filter: ModelSubscriptionAuthorTemplatesFilterInput
) {
  onDeleteAuthorTemplates(filter: $filter) {
    id
    authorId
    indexTemplateId
    author {
      id
      name
      headshot
      linkedIn
      title
      company
      createdAt
      updatedAt
      __typename
    }
    indexTemplate {
      id
      slug
      title
      subhead
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAuthorTemplatesSubscriptionVariables,
  APITypes.OnDeleteAuthorTemplatesSubscription
>;
export const onCreateAchievementUsers = /* GraphQL */ `subscription OnCreateAchievementUsers(
  $filter: ModelSubscriptionAchievementUsersFilterInput
) {
  onCreateAchievementUsers(filter: $filter) {
    id
    userId
    achievementId
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    achievement {
      id
      title
      description
      image
      coursesRequired
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAchievementUsersSubscriptionVariables,
  APITypes.OnCreateAchievementUsersSubscription
>;
export const onUpdateAchievementUsers = /* GraphQL */ `subscription OnUpdateAchievementUsers(
  $filter: ModelSubscriptionAchievementUsersFilterInput
) {
  onUpdateAchievementUsers(filter: $filter) {
    id
    userId
    achievementId
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    achievement {
      id
      title
      description
      image
      coursesRequired
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAchievementUsersSubscriptionVariables,
  APITypes.OnUpdateAchievementUsersSubscription
>;
export const onDeleteAchievementUsers = /* GraphQL */ `subscription OnDeleteAchievementUsers(
  $filter: ModelSubscriptionAchievementUsersFilterInput
) {
  onDeleteAchievementUsers(filter: $filter) {
    id
    userId
    achievementId
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    achievement {
      id
      title
      description
      image
      coursesRequired
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAchievementUsersSubscriptionVariables,
  APITypes.OnDeleteAchievementUsersSubscription
>;
export const onCreateCohortUsers = /* GraphQL */ `subscription OnCreateCohortUsers(
  $filter: ModelSubscriptionCohortUsersFilterInput
) {
  onCreateCohortUsers(filter: $filter) {
    id
    userId
    cohortId
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    cohort {
      id
      name
      startDate
      endDate
      deadline
      type
      description
      link
      createdAt
      updatedAt
      instructorCohortsId
      cohortInstructorId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCohortUsersSubscriptionVariables,
  APITypes.OnCreateCohortUsersSubscription
>;
export const onUpdateCohortUsers = /* GraphQL */ `subscription OnUpdateCohortUsers(
  $filter: ModelSubscriptionCohortUsersFilterInput
) {
  onUpdateCohortUsers(filter: $filter) {
    id
    userId
    cohortId
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    cohort {
      id
      name
      startDate
      endDate
      deadline
      type
      description
      link
      createdAt
      updatedAt
      instructorCohortsId
      cohortInstructorId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCohortUsersSubscriptionVariables,
  APITypes.OnUpdateCohortUsersSubscription
>;
export const onDeleteCohortUsers = /* GraphQL */ `subscription OnDeleteCohortUsers(
  $filter: ModelSubscriptionCohortUsersFilterInput
) {
  onDeleteCohortUsers(filter: $filter) {
    id
    userId
    cohortId
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    cohort {
      id
      name
      startDate
      endDate
      deadline
      type
      description
      link
      createdAt
      updatedAt
      instructorCohortsId
      cohortInstructorId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCohortUsersSubscriptionVariables,
  APITypes.OnDeleteCohortUsersSubscription
>;
export const onCreateUserWishlist = /* GraphQL */ `subscription OnCreateUserWishlist(
  $filter: ModelSubscriptionUserWishlistFilterInput
) {
  onCreateUserWishlist(filter: $filter) {
    id
    userId
    lMSCourseId
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserWishlistSubscriptionVariables,
  APITypes.OnCreateUserWishlistSubscription
>;
export const onUpdateUserWishlist = /* GraphQL */ `subscription OnUpdateUserWishlist(
  $filter: ModelSubscriptionUserWishlistFilterInput
) {
  onUpdateUserWishlist(filter: $filter) {
    id
    userId
    lMSCourseId
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserWishlistSubscriptionVariables,
  APITypes.OnUpdateUserWishlistSubscription
>;
export const onDeleteUserWishlist = /* GraphQL */ `subscription OnDeleteUserWishlist(
  $filter: ModelSubscriptionUserWishlistFilterInput
) {
  onDeleteUserWishlist(filter: $filter) {
    id
    userId
    lMSCourseId
    user {
      id
      thinkificId
      name
      title
      company
      email
      office
      bio
      interests
      goals
      cell
      picture
      linkedin
      location
      companyID
      cmpmFormID
      cpsFormID
      savedCourses
      savedLessons
      savedArticles
      source
      onboardingComplete
      onboardingCompleteDate
      totalXp
      thinkificXp
      psXp
      level
      xpToNextLevel
      lastLogin
      dailyStreak
      allAccess
      allAccessStartDate
      allAccessEndDate
      tourCompleted
      icpfCmpmFormID
      pgsfFormID
      createdAt
      updatedAt
      userUserXpId
      __typename
    }
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserWishlistSubscriptionVariables,
  APITypes.OnDeleteUserWishlistSubscription
>;
export const onCreateCirriculumCourses = /* GraphQL */ `subscription OnCreateCirriculumCourses(
  $filter: ModelSubscriptionCirriculumCoursesFilterInput
) {
  onCreateCirriculumCourses(filter: $filter) {
    id
    lMSCirriculumId
    lMSCourseId
    lMSCirriculum {
      id
      shorthand
      title
      slug
      description
      createdAt
      updatedAt
      __typename
    }
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCirriculumCoursesSubscriptionVariables,
  APITypes.OnCreateCirriculumCoursesSubscription
>;
export const onUpdateCirriculumCourses = /* GraphQL */ `subscription OnUpdateCirriculumCourses(
  $filter: ModelSubscriptionCirriculumCoursesFilterInput
) {
  onUpdateCirriculumCourses(filter: $filter) {
    id
    lMSCirriculumId
    lMSCourseId
    lMSCirriculum {
      id
      shorthand
      title
      slug
      description
      createdAt
      updatedAt
      __typename
    }
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCirriculumCoursesSubscriptionVariables,
  APITypes.OnUpdateCirriculumCoursesSubscription
>;
export const onDeleteCirriculumCourses = /* GraphQL */ `subscription OnDeleteCirriculumCourses(
  $filter: ModelSubscriptionCirriculumCoursesFilterInput
) {
  onDeleteCirriculumCourses(filter: $filter) {
    id
    lMSCirriculumId
    lMSCourseId
    lMSCirriculum {
      id
      shorthand
      title
      slug
      description
      createdAt
      updatedAt
      __typename
    }
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCirriculumCoursesSubscriptionVariables,
  APITypes.OnDeleteCirriculumCoursesSubscription
>;
export const onCreateCourseLessons = /* GraphQL */ `subscription OnCreateCourseLessons(
  $filter: ModelSubscriptionCourseLessonsFilterInput
) {
  onCreateCourseLessons(filter: $filter) {
    id
    lMSCourseId
    lMSLessonId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    lMSLesson {
      id
      title
      subheadline
      objectives
      media
      percentComplete
      content
      slug
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCourseLessonsSubscriptionVariables,
  APITypes.OnCreateCourseLessonsSubscription
>;
export const onUpdateCourseLessons = /* GraphQL */ `subscription OnUpdateCourseLessons(
  $filter: ModelSubscriptionCourseLessonsFilterInput
) {
  onUpdateCourseLessons(filter: $filter) {
    id
    lMSCourseId
    lMSLessonId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    lMSLesson {
      id
      title
      subheadline
      objectives
      media
      percentComplete
      content
      slug
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCourseLessonsSubscriptionVariables,
  APITypes.OnUpdateCourseLessonsSubscription
>;
export const onDeleteCourseLessons = /* GraphQL */ `subscription OnDeleteCourseLessons(
  $filter: ModelSubscriptionCourseLessonsFilterInput
) {
  onDeleteCourseLessons(filter: $filter) {
    id
    lMSCourseId
    lMSLessonId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    lMSLesson {
      id
      title
      subheadline
      objectives
      media
      percentComplete
      content
      slug
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCourseLessonsSubscriptionVariables,
  APITypes.OnDeleteCourseLessonsSubscription
>;
export const onCreateCourseInstructors = /* GraphQL */ `subscription OnCreateCourseInstructors(
  $filter: ModelSubscriptionCourseInstructorsFilterInput
) {
  onCreateCourseInstructors(filter: $filter) {
    id
    lMSCourseId
    instructorId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    instructor {
      id
      userId
      name
      image
      bio
      linkedIn
      company
      title
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCourseInstructorsSubscriptionVariables,
  APITypes.OnCreateCourseInstructorsSubscription
>;
export const onUpdateCourseInstructors = /* GraphQL */ `subscription OnUpdateCourseInstructors(
  $filter: ModelSubscriptionCourseInstructorsFilterInput
) {
  onUpdateCourseInstructors(filter: $filter) {
    id
    lMSCourseId
    instructorId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    instructor {
      id
      userId
      name
      image
      bio
      linkedIn
      company
      title
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCourseInstructorsSubscriptionVariables,
  APITypes.OnUpdateCourseInstructorsSubscription
>;
export const onDeleteCourseInstructors = /* GraphQL */ `subscription OnDeleteCourseInstructors(
  $filter: ModelSubscriptionCourseInstructorsFilterInput
) {
  onDeleteCourseInstructors(filter: $filter) {
    id
    lMSCourseId
    instructorId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    instructor {
      id
      userId
      name
      image
      bio
      linkedIn
      company
      title
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCourseInstructorsSubscriptionVariables,
  APITypes.OnDeleteCourseInstructorsSubscription
>;
export const onCreateAchievementCourses = /* GraphQL */ `subscription OnCreateAchievementCourses(
  $filter: ModelSubscriptionAchievementCoursesFilterInput
) {
  onCreateAchievementCourses(filter: $filter) {
    id
    lMSCourseId
    achievementId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    achievement {
      id
      title
      description
      image
      coursesRequired
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAchievementCoursesSubscriptionVariables,
  APITypes.OnCreateAchievementCoursesSubscription
>;
export const onUpdateAchievementCourses = /* GraphQL */ `subscription OnUpdateAchievementCourses(
  $filter: ModelSubscriptionAchievementCoursesFilterInput
) {
  onUpdateAchievementCourses(filter: $filter) {
    id
    lMSCourseId
    achievementId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    achievement {
      id
      title
      description
      image
      coursesRequired
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAchievementCoursesSubscriptionVariables,
  APITypes.OnUpdateAchievementCoursesSubscription
>;
export const onDeleteAchievementCourses = /* GraphQL */ `subscription OnDeleteAchievementCourses(
  $filter: ModelSubscriptionAchievementCoursesFilterInput
) {
  onDeleteAchievementCourses(filter: $filter) {
    id
    lMSCourseId
    achievementId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    achievement {
      id
      title
      description
      image
      coursesRequired
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAchievementCoursesSubscriptionVariables,
  APITypes.OnDeleteAchievementCoursesSubscription
>;
export const onCreatePartnerCourses = /* GraphQL */ `subscription OnCreatePartnerCourses(
  $filter: ModelSubscriptionPartnerCoursesFilterInput
) {
  onCreatePartnerCourses(filter: $filter) {
    id
    lMSCourseId
    partnerId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    partner {
      id
      name
      image
      link
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePartnerCoursesSubscriptionVariables,
  APITypes.OnCreatePartnerCoursesSubscription
>;
export const onUpdatePartnerCourses = /* GraphQL */ `subscription OnUpdatePartnerCourses(
  $filter: ModelSubscriptionPartnerCoursesFilterInput
) {
  onUpdatePartnerCourses(filter: $filter) {
    id
    lMSCourseId
    partnerId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    partner {
      id
      name
      image
      link
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePartnerCoursesSubscriptionVariables,
  APITypes.OnUpdatePartnerCoursesSubscription
>;
export const onDeletePartnerCourses = /* GraphQL */ `subscription OnDeletePartnerCourses(
  $filter: ModelSubscriptionPartnerCoursesFilterInput
) {
  onDeletePartnerCourses(filter: $filter) {
    id
    lMSCourseId
    partnerId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    partner {
      id
      name
      image
      link
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePartnerCoursesSubscriptionVariables,
  APITypes.OnDeletePartnerCoursesSubscription
>;
export const onCreateLibraryCourses = /* GraphQL */ `subscription OnCreateLibraryCourses(
  $filter: ModelSubscriptionLibraryCoursesFilterInput
) {
  onCreateLibraryCourses(filter: $filter) {
    id
    lMSCourseId
    customerLibaryId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    customerLibary {
      id
      displayName
      slug
      description
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      addOns
      backgroundImage
      code
      status
      availableCodes
      usedCodes
      promotionId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLibraryCoursesSubscriptionVariables,
  APITypes.OnCreateLibraryCoursesSubscription
>;
export const onUpdateLibraryCourses = /* GraphQL */ `subscription OnUpdateLibraryCourses(
  $filter: ModelSubscriptionLibraryCoursesFilterInput
) {
  onUpdateLibraryCourses(filter: $filter) {
    id
    lMSCourseId
    customerLibaryId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    customerLibary {
      id
      displayName
      slug
      description
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      addOns
      backgroundImage
      code
      status
      availableCodes
      usedCodes
      promotionId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLibraryCoursesSubscriptionVariables,
  APITypes.OnUpdateLibraryCoursesSubscription
>;
export const onDeleteLibraryCourses = /* GraphQL */ `subscription OnDeleteLibraryCourses(
  $filter: ModelSubscriptionLibraryCoursesFilterInput
) {
  onDeleteLibraryCourses(filter: $filter) {
    id
    lMSCourseId
    customerLibaryId
    lMSCourse {
      id
      thinkificId
      courseId
      category
      categoryArray
      type
      price
      hours
      lessons
      videos
      preview
      seoImage
      infoSheet
      title
      subheadline
      what_learned
      objectives
      link
      trial_link
      percentComplete
      slug
      collection
      demo
      partOf
      altLink
      shortDescription
      subscriptionLink
      subscriptionPrice
      stripeLink
      callout
      createdAt
      updatedAt
      customerLibaryClientCoursesId
      customerLibaryPschoolCoursesId
      __typename
    }
    customerLibary {
      id
      displayName
      slug
      description
      link
      logo
      email
      primaryColor
      highlightColor
      pdf
      slide
      video
      addOns
      backgroundImage
      code
      status
      availableCodes
      usedCodes
      promotionId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLibraryCoursesSubscriptionVariables,
  APITypes.OnDeleteLibraryCoursesSubscription
>;
export const onCreateIndexTemplateRows = /* GraphQL */ `subscription OnCreateIndexTemplateRows(
  $filter: ModelSubscriptionIndexTemplateRowsFilterInput
) {
  onCreateIndexTemplateRows(filter: $filter) {
    id
    indexTemplateId
    indexRowId
    indexTemplate {
      id
      slug
      title
      subhead
      createdAt
      updatedAt
      __typename
    }
    indexRow {
      id
      headline
      subhead
      type
      content
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIndexTemplateRowsSubscriptionVariables,
  APITypes.OnCreateIndexTemplateRowsSubscription
>;
export const onUpdateIndexTemplateRows = /* GraphQL */ `subscription OnUpdateIndexTemplateRows(
  $filter: ModelSubscriptionIndexTemplateRowsFilterInput
) {
  onUpdateIndexTemplateRows(filter: $filter) {
    id
    indexTemplateId
    indexRowId
    indexTemplate {
      id
      slug
      title
      subhead
      createdAt
      updatedAt
      __typename
    }
    indexRow {
      id
      headline
      subhead
      type
      content
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIndexTemplateRowsSubscriptionVariables,
  APITypes.OnUpdateIndexTemplateRowsSubscription
>;
export const onDeleteIndexTemplateRows = /* GraphQL */ `subscription OnDeleteIndexTemplateRows(
  $filter: ModelSubscriptionIndexTemplateRowsFilterInput
) {
  onDeleteIndexTemplateRows(filter: $filter) {
    id
    indexTemplateId
    indexRowId
    indexTemplate {
      id
      slug
      title
      subhead
      createdAt
      updatedAt
      __typename
    }
    indexRow {
      id
      headline
      subhead
      type
      content
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIndexTemplateRowsSubscriptionVariables,
  APITypes.OnDeleteIndexTemplateRowsSubscription
>;
export const onCreatePartnerAdminUsers = /* GraphQL */ `subscription OnCreatePartnerAdminUsers(
  $filter: ModelSubscriptionPartnerAdminUsersFilterInput
) {
  onCreatePartnerAdminUsers(filter: $filter) {
    id
    partnerId
    partnerAdminId
    partner {
      id
      name
      image
      link
      createdAt
      updatedAt
      __typename
    }
    partnerAdmin {
      id
      name
      email
      password
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePartnerAdminUsersSubscriptionVariables,
  APITypes.OnCreatePartnerAdminUsersSubscription
>;
export const onUpdatePartnerAdminUsers = /* GraphQL */ `subscription OnUpdatePartnerAdminUsers(
  $filter: ModelSubscriptionPartnerAdminUsersFilterInput
) {
  onUpdatePartnerAdminUsers(filter: $filter) {
    id
    partnerId
    partnerAdminId
    partner {
      id
      name
      image
      link
      createdAt
      updatedAt
      __typename
    }
    partnerAdmin {
      id
      name
      email
      password
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePartnerAdminUsersSubscriptionVariables,
  APITypes.OnUpdatePartnerAdminUsersSubscription
>;
export const onDeletePartnerAdminUsers = /* GraphQL */ `subscription OnDeletePartnerAdminUsers(
  $filter: ModelSubscriptionPartnerAdminUsersFilterInput
) {
  onDeletePartnerAdminUsers(filter: $filter) {
    id
    partnerId
    partnerAdminId
    partner {
      id
      name
      image
      link
      createdAt
      updatedAt
      __typename
    }
    partnerAdmin {
      id
      name
      email
      password
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePartnerAdminUsersSubscriptionVariables,
  APITypes.OnDeletePartnerAdminUsersSubscription
>;

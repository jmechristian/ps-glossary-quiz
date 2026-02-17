/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getLessonSource = /* GraphQL */ `query GetLessonSource($id: ID!) {
  getLessonSource(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLessonSourceQueryVariables,
  APITypes.GetLessonSourceQuery
>;
export const listLessonSources = /* GraphQL */ `query ListLessonSources(
  $filter: ModelLessonSourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listLessonSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      link
      position
      createdAt
      updatedAt
      lessonSourcesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLessonSourcesQueryVariables,
  APITypes.ListLessonSourcesQuery
>;
export const getLessonLink = /* GraphQL */ `query GetLessonLink($id: ID!) {
  getLessonLink(id: $id) {
    id
    name
    link
    createdAt
    updatedAt
    lessonLinksId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLessonLinkQueryVariables,
  APITypes.GetLessonLinkQuery
>;
export const listLessonLinks = /* GraphQL */ `query ListLessonLinks(
  $filter: ModelLessonLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  listLessonLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      link
      createdAt
      updatedAt
      lessonLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLessonLinksQueryVariables,
  APITypes.ListLessonLinksQuery
>;
export const getTags = /* GraphQL */ `query GetTags($id: ID!) {
  getTags(id: $id) {
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
` as GeneratedQuery<APITypes.GetTagsQueryVariables, APITypes.GetTagsQuery>;
export const listTags = /* GraphQL */ `query ListTags($filter: ModelTagsFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tag
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTagsQueryVariables, APITypes.ListTagsQuery>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      value
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const getCertificate = /* GraphQL */ `query GetCertificate($id: ID!) {
  getCertificate(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCertificateQueryVariables,
  APITypes.GetCertificateQuery
>;
export const listCertificates = /* GraphQL */ `query ListCertificates(
  $filter: ModelCertificateFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCertificatesQueryVariables,
  APITypes.ListCertificatesQuery
>;
export const getCertificateObject = /* GraphQL */ `query GetCertificateObject($id: ID!) {
  getCertificateObject(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCertificateObjectQueryVariables,
  APITypes.GetCertificateObjectQuery
>;
export const listCertificateObjects = /* GraphQL */ `query ListCertificateObjects(
  $filter: ModelCertificateObjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertificateObjects(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCertificateObjectsQueryVariables,
  APITypes.ListCertificateObjectsQuery
>;
export const getCourse = /* GraphQL */ `query GetCourse($id: ID!) {
  getCourse(id: $id) {
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
` as GeneratedQuery<APITypes.GetCourseQueryVariables, APITypes.GetCourseQuery>;
export const listCourses = /* GraphQL */ `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoursesQueryVariables,
  APITypes.ListCoursesQuery
>;
export const getLesson = /* GraphQL */ `query GetLesson($id: ID!) {
  getLesson(id: $id) {
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
` as GeneratedQuery<APITypes.GetLessonQueryVariables, APITypes.GetLessonQuery>;
export const listLessons = /* GraphQL */ `query ListLessons(
  $filter: ModelLessonFilterInput
  $limit: Int
  $nextToken: String
) {
  listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLessonsQueryVariables,
  APITypes.ListLessonsQuery
>;
export const getSeoDocument = /* GraphQL */ `query GetSeoDocument($id: ID!) {
  getSeoDocument(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSeoDocumentQueryVariables,
  APITypes.GetSeoDocumentQuery
>;
export const listSeoDocuments = /* GraphQL */ `query ListSeoDocuments(
  $filter: ModelSeoDocumentFilterInput
  $limit: Int
  $nextToken: String
) {
  listSeoDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSeoDocumentsQueryVariables,
  APITypes.ListSeoDocumentsQuery
>;
export const getAuthor = /* GraphQL */ `query GetAuthor($id: ID!) {
  getAuthor(id: $id) {
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
` as GeneratedQuery<APITypes.GetAuthorQueryVariables, APITypes.GetAuthorQuery>;
export const listAuthors = /* GraphQL */ `query ListAuthors(
  $filter: ModelAuthorFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorsQueryVariables,
  APITypes.ListAuthorsQuery
>;
export const getBlog = /* GraphQL */ `query GetBlog($id: ID!) {
  getBlog(id: $id) {
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
` as GeneratedQuery<APITypes.GetBlogQueryVariables, APITypes.GetBlogQuery>;
export const listBlogs = /* GraphQL */ `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBlogsQueryVariables, APITypes.ListBlogsQuery>;
export const getArticle = /* GraphQL */ `query GetArticle($id: ID!) {
  getArticle(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetArticleQueryVariables,
  APITypes.GetArticleQuery
>;
export const listArticles = /* GraphQL */ `query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticlesQueryVariables,
  APITypes.ListArticlesQuery
>;
export const getDayInLifeItem = /* GraphQL */ `query GetDayInLifeItem($id: ID!) {
  getDayInLifeItem(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetDayInLifeItemQueryVariables,
  APITypes.GetDayInLifeItemQuery
>;
export const listDayInLifeItems = /* GraphQL */ `query ListDayInLifeItems(
  $filter: ModelDayInLifeItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listDayInLifeItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      desc
      icon
      createdAt
      updatedAt
      careerDayInLifeId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDayInLifeItemsQueryVariables,
  APITypes.ListDayInLifeItemsQuery
>;
export const getCareer = /* GraphQL */ `query GetCareer($id: ID!) {
  getCareer(id: $id) {
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
` as GeneratedQuery<APITypes.GetCareerQueryVariables, APITypes.GetCareerQuery>;
export const listCareers = /* GraphQL */ `query ListCareers(
  $filter: ModelCareerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCareers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      slug
      title
      altName
      subhead
      media
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCareersQueryVariables,
  APITypes.ListCareersQuery
>;
export const getAPS2025MediaItem = /* GraphQL */ `query GetAPS2025MediaItem($id: ID!) {
  getAPS2025MediaItem(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAPS2025MediaItemQueryVariables,
  APITypes.GetAPS2025MediaItemQuery
>;
export const listAPS2025MediaItems = /* GraphQL */ `query ListAPS2025MediaItems(
  $filter: ModelAPS2025MediaItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listAPS2025MediaItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAPS2025MediaItemsQueryVariables,
  APITypes.ListAPS2025MediaItemsQuery
>;
export const getCompany = /* GraphQL */ `query GetCompany($id: ID!) {
  getCompany(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCompanyQueryVariables,
  APITypes.GetCompanyQuery
>;
export const listCompanies = /* GraphQL */ `query ListCompanies(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompaniesQueryVariables,
  APITypes.ListCompaniesQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getUserXp = /* GraphQL */ `query GetUserXp($id: ID!) {
  getUserXp(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserXpQueryVariables, APITypes.GetUserXpQuery>;
export const listUserXps = /* GraphQL */ `query ListUserXps(
  $filter: ModelUserXpFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserXps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserXpsQueryVariables,
  APITypes.ListUserXpsQuery
>;
export const getCohort = /* GraphQL */ `query GetCohort($id: ID!) {
  getCohort(id: $id) {
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
` as GeneratedQuery<APITypes.GetCohortQueryVariables, APITypes.GetCohortQuery>;
export const listCohorts = /* GraphQL */ `query ListCohorts(
  $filter: ModelCohortFilterInput
  $limit: Int
  $nextToken: String
) {
  listCohorts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCohortsQueryVariables,
  APITypes.ListCohortsQuery
>;
export const getLearningPath = /* GraphQL */ `query GetLearningPath($id: ID!) {
  getLearningPath(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLearningPathQueryVariables,
  APITypes.GetLearningPathQuery
>;
export const listLearningPaths = /* GraphQL */ `query ListLearningPaths(
  $filter: ModelLearningPathFilterInput
  $limit: Int
  $nextToken: String
) {
  listLearningPaths(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLearningPathsQueryVariables,
  APITypes.ListLearningPathsQuery
>;
export const getLearningPathProgress = /* GraphQL */ `query GetLearningPathProgress($id: ID!) {
  getLearningPathProgress(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLearningPathProgressQueryVariables,
  APITypes.GetLearningPathProgressQuery
>;
export const listLearningPathProgresses = /* GraphQL */ `query ListLearningPathProgresses(
  $filter: ModelLearningPathProgressFilterInput
  $limit: Int
  $nextToken: String
) {
  listLearningPathProgresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLearningPathProgressesQueryVariables,
  APITypes.ListLearningPathProgressesQuery
>;
export const getLearningPathCourse = /* GraphQL */ `query GetLearningPathCourse($id: ID!) {
  getLearningPathCourse(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLearningPathCourseQueryVariables,
  APITypes.GetLearningPathCourseQuery
>;
export const listLearningPathCourses = /* GraphQL */ `query ListLearningPathCourses(
  $filter: ModelLearningPathCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listLearningPathCourses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      courseId
      order
      thinkificId
      createdAt
      updatedAt
      learningPathCoursesId
      lMSCourseLearningPathsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLearningPathCoursesQueryVariables,
  APITypes.ListLearningPathCoursesQuery
>;
export const getLearningPathLesson = /* GraphQL */ `query GetLearningPathLesson($id: ID!) {
  getLearningPathLesson(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLearningPathLessonQueryVariables,
  APITypes.GetLearningPathLessonQuery
>;
export const listLearningPathLessons = /* GraphQL */ `query ListLearningPathLessons(
  $filter: ModelLearningPathLessonFilterInput
  $limit: Int
  $nextToken: String
) {
  listLearningPathLessons(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lessonId
      order
      createdAt
      updatedAt
      lessonLearningPathsId
      learningPathLessonsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLearningPathLessonsQueryVariables,
  APITypes.ListLearningPathLessonsQuery
>;
export const getCMPMSession = /* GraphQL */ `query GetCMPMSession($id: ID!) {
  getCMPMSession(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCMPMSessionQueryVariables,
  APITypes.GetCMPMSessionQuery
>;
export const listCMPMSessions = /* GraphQL */ `query ListCMPMSessions(
  $filter: ModelCMPMSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listCMPMSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCMPMSessionsQueryVariables,
  APITypes.ListCMPMSessionsQuery
>;
export const getCMPMForm = /* GraphQL */ `query GetCMPMForm($id: ID!) {
  getCMPMForm(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCMPMFormQueryVariables,
  APITypes.GetCMPMFormQuery
>;
export const listCMPMForms = /* GraphQL */ `query ListCMPMForms(
  $filter: ModelCMPMFormFilterInput
  $limit: Int
  $nextToken: String
) {
  listCMPMForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCMPMFormsQueryVariables,
  APITypes.ListCMPMFormsQuery
>;
export const getIcpfCmpmForm = /* GraphQL */ `query GetIcpfCmpmForm($id: ID!) {
  getIcpfCmpmForm(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIcpfCmpmFormQueryVariables,
  APITypes.GetIcpfCmpmFormQuery
>;
export const listIcpfCmpmForms = /* GraphQL */ `query ListIcpfCmpmForms(
  $filter: ModelIcpfCmpmFormFilterInput
  $limit: Int
  $nextToken: String
) {
  listIcpfCmpmForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIcpfCmpmFormsQueryVariables,
  APITypes.ListIcpfCmpmFormsQuery
>;
export const getPgsfForm = /* GraphQL */ `query GetPgsfForm($id: ID!) {
  getPgsfForm(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPgsfFormQueryVariables,
  APITypes.GetPgsfFormQuery
>;
export const listPgsfForms = /* GraphQL */ `query ListPgsfForms(
  $filter: ModelPgsfFormFilterInput
  $limit: Int
  $nextToken: String
) {
  listPgsfForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPgsfFormsQueryVariables,
  APITypes.ListPgsfFormsQuery
>;
export const getCPSForm = /* GraphQL */ `query GetCPSForm($id: ID!) {
  getCPSForm(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCPSFormQueryVariables,
  APITypes.GetCPSFormQuery
>;
export const listCPSForms = /* GraphQL */ `query ListCPSForms(
  $filter: ModelCPSFormFilterInput
  $limit: Int
  $nextToken: String
) {
  listCPSForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCPSFormsQueryVariables,
  APITypes.ListCPSFormsQuery
>;
export const getAppStart = /* GraphQL */ `query GetAppStart($id: ID!) {
  getAppStart(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAppStartQueryVariables,
  APITypes.GetAppStartQuery
>;
export const listAppStarts = /* GraphQL */ `query ListAppStarts(
  $filter: ModelAppStartFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppStarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAppStartsQueryVariables,
  APITypes.ListAppStartsQuery
>;
export const getApplicationStart = /* GraphQL */ `query GetApplicationStart($id: ID!, $createdAt: String!) {
  getApplicationStart(id: $id, createdAt: $createdAt) {
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
` as GeneratedQuery<
  APITypes.GetApplicationStartQueryVariables,
  APITypes.GetApplicationStartQuery
>;
export const listApplicationStarts = /* GraphQL */ `query ListApplicationStarts(
  $id: ID
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelApplicationStartFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listApplicationStarts(
    id: $id
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApplicationStartsQueryVariables,
  APITypes.ListApplicationStartsQuery
>;
export const getCertAppStart = /* GraphQL */ `query GetCertAppStart($id: ID!) {
  getCertAppStart(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCertAppStartQueryVariables,
  APITypes.GetCertAppStartQuery
>;
export const listCertAppStarts = /* GraphQL */ `query ListCertAppStarts(
  $filter: ModelCertAppStartFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertAppStarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCertAppStartsQueryVariables,
  APITypes.ListCertAppStartsQuery
>;
export const getLMSCollection = /* GraphQL */ `query GetLMSCollection($id: ID!) {
  getLMSCollection(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLMSCollectionQueryVariables,
  APITypes.GetLMSCollectionQuery
>;
export const listLMSCollections = /* GraphQL */ `query ListLMSCollections(
  $filter: ModelLMSCollectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listLMSCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLMSCollectionsQueryVariables,
  APITypes.ListLMSCollectionsQuery
>;
export const getLMSCirriculum = /* GraphQL */ `query GetLMSCirriculum($id: ID!) {
  getLMSCirriculum(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLMSCirriculumQueryVariables,
  APITypes.GetLMSCirriculumQuery
>;
export const listLMSCirriculums = /* GraphQL */ `query ListLMSCirriculums(
  $filter: ModelLMSCirriculumFilterInput
  $limit: Int
  $nextToken: String
) {
  listLMSCirriculums(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      shorthand
      title
      slug
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLMSCirriculumsQueryVariables,
  APITypes.ListLMSCirriculumsQuery
>;
export const getLMSCourse = /* GraphQL */ `query GetLMSCourse($id: ID!) {
  getLMSCourse(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLMSCourseQueryVariables,
  APITypes.GetLMSCourseQuery
>;
export const listLMSCourses = /* GraphQL */ `query ListLMSCourses(
  $filter: ModelLMSCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listLMSCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLMSCoursesQueryVariables,
  APITypes.ListLMSCoursesQuery
>;
export const getLMSLesson = /* GraphQL */ `query GetLMSLesson($id: ID!) {
  getLMSLesson(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLMSLessonQueryVariables,
  APITypes.GetLMSLessonQuery
>;
export const listLMSLessons = /* GraphQL */ `query ListLMSLessons(
  $filter: ModelLMSLessonFilterInput
  $limit: Int
  $nextToken: String
) {
  listLMSLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLMSLessonsQueryVariables,
  APITypes.ListLMSLessonsQuery
>;
export const getLMSModule = /* GraphQL */ `query GetLMSModule($id: ID!) {
  getLMSModule(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLMSModuleQueryVariables,
  APITypes.GetLMSModuleQuery
>;
export const listLMSModules = /* GraphQL */ `query ListLMSModules(
  $filter: ModelLMSModuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listLMSModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLMSModulesQueryVariables,
  APITypes.ListLMSModulesQuery
>;
export const getLMSQuiz = /* GraphQL */ `query GetLMSQuiz($id: ID!) {
  getLMSQuiz(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLMSQuizQueryVariables,
  APITypes.GetLMSQuizQuery
>;
export const listLMSQuizs = /* GraphQL */ `query ListLMSQuizs(
  $filter: ModelLMSQuizFilterInput
  $limit: Int
  $nextToken: String
) {
  listLMSQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLMSQuizsQueryVariables,
  APITypes.ListLMSQuizsQuery
>;
export const getInstructor = /* GraphQL */ `query GetInstructor($id: ID!) {
  getInstructor(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInstructorQueryVariables,
  APITypes.GetInstructorQuery
>;
export const listInstructors = /* GraphQL */ `query ListInstructors(
  $filter: ModelInstructorFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInstructorsQueryVariables,
  APITypes.ListInstructorsQuery
>;
export const getObjective = /* GraphQL */ `query GetObjective($id: ID!) {
  getObjective(id: $id) {
    id
    objective
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetObjectiveQueryVariables,
  APITypes.GetObjectiveQuery
>;
export const listObjectives = /* GraphQL */ `query ListObjectives(
  $filter: ModelObjectiveFilterInput
  $limit: Int
  $nextToken: String
) {
  listObjectives(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      objective
      completed
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListObjectivesQueryVariables,
  APITypes.ListObjectivesQuery
>;
export const getSlide = /* GraphQL */ `query GetSlide($id: ID!) {
  getSlide(id: $id) {
    id
    slideSource
    description
    createdAt
    updatedAt
    lMSModuleSlidesId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSlideQueryVariables, APITypes.GetSlideQuery>;
export const listSlides = /* GraphQL */ `query ListSlides(
  $filter: ModelSlideFilterInput
  $limit: Int
  $nextToken: String
) {
  listSlides(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      slideSource
      description
      createdAt
      updatedAt
      lMSModuleSlidesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSlidesQueryVariables,
  APITypes.ListSlidesQuery
>;
export const getTimestamp = /* GraphQL */ `query GetTimestamp($id: ID!) {
  getTimestamp(id: $id) {
    id
    time
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTimestampQueryVariables,
  APITypes.GetTimestampQuery
>;
export const listTimestamps = /* GraphQL */ `query ListTimestamps(
  $filter: ModelTimestampFilterInput
  $limit: Int
  $nextToken: String
) {
  listTimestamps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      time
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTimestampsQueryVariables,
  APITypes.ListTimestampsQuery
>;
export const getStaff = /* GraphQL */ `query GetStaff($id: ID!) {
  getStaff(id: $id) {
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
` as GeneratedQuery<APITypes.GetStaffQueryVariables, APITypes.GetStaffQuery>;
export const listStaff = /* GraphQL */ `query ListStaff(
  $filter: ModelStaffFilterInput
  $limit: Int
  $nextToken: String
) {
  listStaff(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      fullName
      title
      image
      linkedIn
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListStaffQueryVariables, APITypes.ListStaffQuery>;
export const getTrackedCourse = /* GraphQL */ `query GetTrackedCourse($id: ID!) {
  getTrackedCourse(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTrackedCourseQueryVariables,
  APITypes.GetTrackedCourseQuery
>;
export const listTrackedCourses = /* GraphQL */ `query ListTrackedCourses(
  $filter: ModelTrackedCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listTrackedCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      courseId
      clicks
      customerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTrackedCoursesQueryVariables,
  APITypes.ListTrackedCoursesQuery
>;
export const getIncludedCourse = /* GraphQL */ `query GetIncludedCourse($id: ID!) {
  getIncludedCourse(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIncludedCourseQueryVariables,
  APITypes.GetIncludedCourseQuery
>;
export const listIncludedCourses = /* GraphQL */ `query ListIncludedCourses(
  $filter: ModelIncludedCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listIncludedCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      courseId
      customerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIncludedCoursesQueryVariables,
  APITypes.ListIncludedCoursesQuery
>;
export const getCustomer = /* GraphQL */ `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const getCustomerLibary = /* GraphQL */ `query GetCustomerLibary($id: ID!) {
  getCustomerLibary(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCustomerLibaryQueryVariables,
  APITypes.GetCustomerLibaryQuery
>;
export const listCustomerLibaries = /* GraphQL */ `query ListCustomerLibaries(
  $filter: ModelCustomerLibaryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomerLibaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomerLibariesQueryVariables,
  APITypes.ListCustomerLibariesQuery
>;
export const getSalesBar = /* GraphQL */ `query GetSalesBar($id: ID!) {
  getSalesBar(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSalesBarQueryVariables,
  APITypes.GetSalesBarQuery
>;
export const listSalesBars = /* GraphQL */ `query ListSalesBars(
  $filter: ModelSalesBarFilterInput
  $limit: Int
  $nextToken: String
) {
  listSalesBars(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      link
      icon
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSalesBarsQueryVariables,
  APITypes.ListSalesBarsQuery
>;
export const getTestimonial = /* GraphQL */ `query GetTestimonial($id: ID!) {
  getTestimonial(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTestimonialQueryVariables,
  APITypes.GetTestimonialQuery
>;
export const listTestimonials = /* GraphQL */ `query ListTestimonials(
  $filter: ModelTestimonialFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestimonials(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTestimonialsQueryVariables,
  APITypes.ListTestimonialsQuery
>;
export const getWorkshopForm = /* GraphQL */ `query GetWorkshopForm($id: ID!) {
  getWorkshopForm(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetWorkshopFormQueryVariables,
  APITypes.GetWorkshopFormQuery
>;
export const listWorkshopForms = /* GraphQL */ `query ListWorkshopForms(
  $filter: ModelWorkshopFormFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkshopForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWorkshopFormsQueryVariables,
  APITypes.ListWorkshopFormsQuery
>;
export const getCourseClick = /* GraphQL */ `query GetCourseClick($id: ID!) {
  getCourseClick(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCourseClickQueryVariables,
  APITypes.GetCourseClickQuery
>;
export const listCourseClicks = /* GraphQL */ `query ListCourseClicks(
  $filter: ModelCourseClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseClicksQueryVariables,
  APITypes.ListCourseClicksQuery
>;
export const getSalesbarClick = /* GraphQL */ `query GetSalesbarClick($id: ID!) {
  getSalesbarClick(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSalesbarClickQueryVariables,
  APITypes.GetSalesbarClickQuery
>;
export const listSalesbarClicks = /* GraphQL */ `query ListSalesbarClicks(
  $filter: ModelSalesbarClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listSalesbarClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      page
      ipAddress
      country
      link
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSalesbarClicksQueryVariables,
  APITypes.ListSalesbarClicksQuery
>;
export const getLessonClick = /* GraphQL */ `query GetLessonClick($id: ID!) {
  getLessonClick(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLessonClickQueryVariables,
  APITypes.GetLessonClickQuery
>;
export const listLessonClicks = /* GraphQL */ `query ListLessonClicks(
  $filter: ModelLessonClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listLessonClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLessonClicksQueryVariables,
  APITypes.ListLessonClicksQuery
>;
export const getCourseSearch = /* GraphQL */ `query GetCourseSearch($id: ID!) {
  getCourseSearch(id: $id) {
    id
    term
    ipAddress
    country
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCourseSearchQueryVariables,
  APITypes.GetCourseSearchQuery
>;
export const listCourseSearches = /* GraphQL */ `query ListCourseSearches(
  $filter: ModelCourseSearchFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseSearches(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseSearchesQueryVariables,
  APITypes.ListCourseSearchesQuery
>;
export const getCyberMondayClick = /* GraphQL */ `query GetCyberMondayClick($id: ID!) {
  getCyberMondayClick(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCyberMondayClickQueryVariables,
  APITypes.GetCyberMondayClickQuery
>;
export const listCyberMondayClicks = /* GraphQL */ `query ListCyberMondayClicks(
  $filter: ModelCyberMondayClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listCyberMondayClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      object
      ipAddress
      country
      device
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCyberMondayClicksQueryVariables,
  APITypes.ListCyberMondayClicksQuery
>;
export const getAPSPresentationClick = /* GraphQL */ `query GetAPSPresentationClick($id: ID!) {
  getAPSPresentationClick(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAPSPresentationClickQueryVariables,
  APITypes.GetAPSPresentationClickQuery
>;
export const listAPSPresentationClicks = /* GraphQL */ `query ListAPSPresentationClicks(
  $filter: ModelAPSPresentationClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listAPSPresentationClicks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAPSPresentationClicksQueryVariables,
  APITypes.ListAPSPresentationClicksQuery
>;
export const getCategoryClick = /* GraphQL */ `query GetCategoryClick($id: ID!) {
  getCategoryClick(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCategoryClickQueryVariables,
  APITypes.GetCategoryClickQuery
>;
export const listCategoryClicks = /* GraphQL */ `query ListCategoryClicks(
  $filter: ModelCategoryClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategoryClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoryClicksQueryVariables,
  APITypes.ListCategoryClicksQuery
>;
export const getClick = /* GraphQL */ `query GetClick($id: ID!) {
  getClick(id: $id) {
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
` as GeneratedQuery<APITypes.GetClickQueryVariables, APITypes.GetClickQuery>;
export const listClicks = /* GraphQL */ `query ListClicks(
  $filter: ModelClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClicksQueryVariables,
  APITypes.ListClicksQuery
>;
export const getIndiaClick = /* GraphQL */ `query GetIndiaClick($id: ID!) {
  getIndiaClick(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIndiaClickQueryVariables,
  APITypes.GetIndiaClickQuery
>;
export const listIndiaClicks = /* GraphQL */ `query ListIndiaClicks(
  $filter: ModelIndiaClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listIndiaClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIndiaClicksQueryVariables,
  APITypes.ListIndiaClicksQuery
>;
export const getIndiaCourseSearch = /* GraphQL */ `query GetIndiaCourseSearch($id: ID!) {
  getIndiaCourseSearch(id: $id) {
    id
    term
    ipAddress
    country
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIndiaCourseSearchQueryVariables,
  APITypes.GetIndiaCourseSearchQuery
>;
export const listIndiaCourseSearches = /* GraphQL */ `query ListIndiaCourseSearches(
  $filter: ModelIndiaCourseSearchFilterInput
  $limit: Int
  $nextToken: String
) {
  listIndiaCourseSearches(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIndiaCourseSearchesQueryVariables,
  APITypes.ListIndiaCourseSearchesQuery
>;
export const getIndexTemplate = /* GraphQL */ `query GetIndexTemplate($id: ID!) {
  getIndexTemplate(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIndexTemplateQueryVariables,
  APITypes.GetIndexTemplateQuery
>;
export const listIndexTemplates = /* GraphQL */ `query ListIndexTemplates(
  $filter: ModelIndexTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  listIndexTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      slug
      title
      subhead
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIndexTemplatesQueryVariables,
  APITypes.ListIndexTemplatesQuery
>;
export const getIndexRow = /* GraphQL */ `query GetIndexRow($id: ID!) {
  getIndexRow(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIndexRowQueryVariables,
  APITypes.GetIndexRowQuery
>;
export const listIndexRows = /* GraphQL */ `query ListIndexRows(
  $filter: ModelIndexRowFilterInput
  $limit: Int
  $nextToken: String
) {
  listIndexRows(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      headline
      subhead
      type
      content
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIndexRowsQueryVariables,
  APITypes.ListIndexRowsQuery
>;
export const getIndexPage = /* GraphQL */ `query GetIndexPage($id: ID!) {
  getIndexPage(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIndexPageQueryVariables,
  APITypes.GetIndexPageQuery
>;
export const listIndexPages = /* GraphQL */ `query ListIndexPages(
  $filter: ModelIndexPageFilterInput
  $limit: Int
  $nextToken: String
) {
  listIndexPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIndexPagesQueryVariables,
  APITypes.ListIndexPagesQuery
>;
export const getFaq = /* GraphQL */ `query GetFaq($id: ID!) {
  getFaq(id: $id) {
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
` as GeneratedQuery<APITypes.GetFaqQueryVariables, APITypes.GetFaqQuery>;
export const listFaqs = /* GraphQL */ `query ListFaqs($filter: ModelFaqFilterInput, $limit: Int, $nextToken: String) {
  listFaqs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      question
      answer
      type
      order
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListFaqsQueryVariables, APITypes.ListFaqsQuery>;
export const getGlossaryTerm = /* GraphQL */ `query GetGlossaryTerm($id: ID!) {
  getGlossaryTerm(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGlossaryTermQueryVariables,
  APITypes.GetGlossaryTermQuery
>;
export const listGlossaryTerms = /* GraphQL */ `query ListGlossaryTerms(
  $filter: ModelGlossaryTermFilterInput
  $limit: Int
  $nextToken: String
) {
  listGlossaryTerms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGlossaryTermsQueryVariables,
  APITypes.ListGlossaryTermsQuery
>;
export const getEventTemplate = /* GraphQL */ `query GetEventTemplate($id: ID!) {
  getEventTemplate(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEventTemplateQueryVariables,
  APITypes.GetEventTemplateQuery
>;
export const listEventTemplates = /* GraphQL */ `query ListEventTemplates(
  $filter: ModelEventTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventTemplatesQueryVariables,
  APITypes.ListEventTemplatesQuery
>;
export const getEventPhoto = /* GraphQL */ `query GetEventPhoto($id: ID!) {
  getEventPhoto(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEventPhotoQueryVariables,
  APITypes.GetEventPhotoQuery
>;
export const listEventPhotos = /* GraphQL */ `query ListEventPhotos(
  $filter: ModelEventPhotoFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      photo
      caption
      uploadedBy
      order
      createdAt
      updatedAt
      eventTemplatePhotosId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventPhotosQueryVariables,
  APITypes.ListEventPhotosQuery
>;
export const getUserEventPhoto = /* GraphQL */ `query GetUserEventPhoto($id: ID!) {
  getUserEventPhoto(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserEventPhotoQueryVariables,
  APITypes.GetUserEventPhotoQuery
>;
export const listUserEventPhotos = /* GraphQL */ `query ListUserEventPhotos(
  $filter: ModelUserEventPhotoFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserEventPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserEventPhotosQueryVariables,
  APITypes.ListUserEventPhotosQuery
>;
export const getEventPresentation = /* GraphQL */ `query GetEventPresentation($id: ID!) {
  getEventPresentation(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEventPresentationQueryVariables,
  APITypes.GetEventPresentationQuery
>;
export const listEventPresentations = /* GraphQL */ `query ListEventPresentations(
  $filter: ModelEventPresentationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventPresentations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      presentation
      hero
      createdAt
      updatedAt
      eventTemplatePresentationsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventPresentationsQueryVariables,
  APITypes.ListEventPresentationsQuery
>;
export const getEventAgenda = /* GraphQL */ `query GetEventAgenda($id: ID!) {
  getEventAgenda(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEventAgendaQueryVariables,
  APITypes.GetEventAgendaQuery
>;
export const listEventAgenda = /* GraphQL */ `query ListEventAgenda(
  $filter: ModelEventAgendaFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventAgenda(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      eventAgendaEventId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventAgendaQueryVariables,
  APITypes.ListEventAgendaQuery
>;
export const getEventAgendaItem = /* GraphQL */ `query GetEventAgendaItem($id: ID!) {
  getEventAgendaItem(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEventAgendaItemQueryVariables,
  APITypes.GetEventAgendaItemQuery
>;
export const listEventAgendaItems = /* GraphQL */ `query ListEventAgendaItems(
  $filter: ModelEventAgendaItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventAgendaItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      location
      type
      start
      end
      createdAt
      updatedAt
      eventAgendaItemsId
      eventSpeakerAgendaItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventAgendaItemsQueryVariables,
  APITypes.ListEventAgendaItemsQuery
>;
export const getEventSpeaker = /* GraphQL */ `query GetEventSpeaker($id: ID!) {
  getEventSpeaker(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEventSpeakerQueryVariables,
  APITypes.GetEventSpeakerQuery
>;
export const listEventSpeakers = /* GraphQL */ `query ListEventSpeakers(
  $filter: ModelEventSpeakerFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      title
      company
      email
      image
      logo
      createdAt
      updatedAt
      eventTemplateSpeakersId
      eventAgendaItemSpeakersId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventSpeakersQueryVariables,
  APITypes.ListEventSpeakersQuery
>;
export const getEventClick = /* GraphQL */ `query GetEventClick($id: ID!) {
  getEventClick(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEventClickQueryVariables,
  APITypes.GetEventClickQuery
>;
export const listEventClicks = /* GraphQL */ `query ListEventClicks(
  $filter: ModelEventClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventClicksQueryVariables,
  APITypes.ListEventClicksQuery
>;
export const getCertificateClick = /* GraphQL */ `query GetCertificateClick($id: ID!) {
  getCertificateClick(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCertificateClickQueryVariables,
  APITypes.GetCertificateClickQuery
>;
export const listCertificateClicks = /* GraphQL */ `query ListCertificateClicks(
  $filter: ModelCertificateClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertificateClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCertificateClicksQueryVariables,
  APITypes.ListCertificateClicksQuery
>;
export const getIndexClick = /* GraphQL */ `query GetIndexClick($id: ID!) {
  getIndexClick(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIndexClickQueryVariables,
  APITypes.GetIndexClickQuery
>;
export const listIndexClicks = /* GraphQL */ `query ListIndexClicks(
  $filter: ModelIndexClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listIndexClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIndexClicksQueryVariables,
  APITypes.ListIndexClicksQuery
>;
export const getEmailSubscription = /* GraphQL */ `query GetEmailSubscription($id: ID!) {
  getEmailSubscription(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEmailSubscriptionQueryVariables,
  APITypes.GetEmailSubscriptionQuery
>;
export const listEmailSubscriptions = /* GraphQL */ `query ListEmailSubscriptions(
  $filter: ModelEmailSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmailSubscriptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEmailSubscriptionsQueryVariables,
  APITypes.ListEmailSubscriptionsQuery
>;
export const getImageObject = /* GraphQL */ `query GetImageObject($id: ID!) {
  getImageObject(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetImageObjectQueryVariables,
  APITypes.GetImageObjectQuery
>;
export const listImageObjects = /* GraphQL */ `query ListImageObjects(
  $filter: ModelImageObjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listImageObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      caption
      uploadedBy
      alt
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListImageObjectsQueryVariables,
  APITypes.ListImageObjectsQuery
>;
export const getPurchase = /* GraphQL */ `query GetPurchase($id: ID!) {
  getPurchase(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPurchaseQueryVariables,
  APITypes.GetPurchaseQuery
>;
export const listPurchases = /* GraphQL */ `query ListPurchases(
  $filter: ModelPurchaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPurchasesQueryVariables,
  APITypes.ListPurchasesQuery
>;
export const getAnalysis = /* GraphQL */ `query GetAnalysis($id: ID!) {
  getAnalysis(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAnalysisQueryVariables,
  APITypes.GetAnalysisQuery
>;
export const listAnalyses = /* GraphQL */ `query ListAnalyses(
  $filter: ModelAnalysisFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnalyses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAnalysesQueryVariables,
  APITypes.ListAnalysesQuery
>;
export const getAchievement = /* GraphQL */ `query GetAchievement($id: ID!) {
  getAchievement(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAchievementQueryVariables,
  APITypes.GetAchievementQuery
>;
export const listAchievements = /* GraphQL */ `query ListAchievements(
  $filter: ModelAchievementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAchievements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      image
      coursesRequired
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAchievementsQueryVariables,
  APITypes.ListAchievementsQuery
>;
export const getTest = /* GraphQL */ `query GetTest($id: ID!) {
  getTest(id: $id) {
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
` as GeneratedQuery<APITypes.GetTestQueryVariables, APITypes.GetTestQuery>;
export const listTests = /* GraphQL */ `query ListTests(
  $filter: ModelTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      totalTasks
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTestsQueryVariables, APITypes.ListTestsQuery>;
export const getTestTask = /* GraphQL */ `query GetTestTask($id: ID!) {
  getTestTask(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTestTaskQueryVariables,
  APITypes.GetTestTaskQuery
>;
export const listTestTasks = /* GraphQL */ `query ListTestTasks(
  $filter: ModelTestTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      task
      completed
      completedDate
      createdAt
      updatedAt
      testTasksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTestTasksQueryVariables,
  APITypes.ListTestTasksQuery
>;
export const getCourseReview = /* GraphQL */ `query GetCourseReview($id: ID!) {
  getCourseReview(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCourseReviewQueryVariables,
  APITypes.GetCourseReviewQuery
>;
export const listCourseReviews = /* GraphQL */ `query ListCourseReviews(
  $filter: ModelCourseReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      review
      rating
      createdAt
      userID
      thinkificId
      updatedAt
      userReviewsId
      lMSCourseReviewsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseReviewsQueryVariables,
  APITypes.ListCourseReviewsQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
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
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      name
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const getSearchLog = /* GraphQL */ `query GetSearchLog($id: ID!) {
  getSearchLog(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSearchLogQueryVariables,
  APITypes.GetSearchLogQuery
>;
export const listSearchLogs = /* GraphQL */ `query ListSearchLogs(
  $filter: ModelSearchLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listSearchLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      timestamp
      query
      results_count
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSearchLogsQueryVariables,
  APITypes.ListSearchLogsQuery
>;
export const getPartner = /* GraphQL */ `query GetPartner($id: ID!) {
  getPartner(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPartnerQueryVariables,
  APITypes.GetPartnerQuery
>;
export const listPartners = /* GraphQL */ `query ListPartners(
  $filter: ModelPartnerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPartners(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      image
      link
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPartnersQueryVariables,
  APITypes.ListPartnersQuery
>;
export const getPartnerAdmin = /* GraphQL */ `query GetPartnerAdmin($id: ID!) {
  getPartnerAdmin(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPartnerAdminQueryVariables,
  APITypes.GetPartnerAdminQuery
>;
export const listPartnerAdmins = /* GraphQL */ `query ListPartnerAdmins(
  $filter: ModelPartnerAdminFilterInput
  $limit: Int
  $nextToken: String
) {
  listPartnerAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      password
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPartnerAdminsQueryVariables,
  APITypes.ListPartnerAdminsQuery
>;
export const getLibrarySurvey = /* GraphQL */ `query GetLibrarySurvey($id: ID!) {
  getLibrarySurvey(id: $id) {
    id
    company
    options
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLibrarySurveyQueryVariables,
  APITypes.GetLibrarySurveyQuery
>;
export const listLibrarySurveys = /* GraphQL */ `query ListLibrarySurveys(
  $filter: ModelLibrarySurveyFilterInput
  $limit: Int
  $nextToken: String
) {
  listLibrarySurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      company
      options
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLibrarySurveysQueryVariables,
  APITypes.ListLibrarySurveysQuery
>;
export const getCyberMondayCode = /* GraphQL */ `query GetCyberMondayCode($id: ID!) {
  getCyberMondayCode(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCyberMondayCodeQueryVariables,
  APITypes.GetCyberMondayCodeQuery
>;
export const listCyberMondayCodes = /* GraphQL */ `query ListCyberMondayCodes(
  $filter: ModelCyberMondayCodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listCyberMondayCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCyberMondayCodesQueryVariables,
  APITypes.ListCyberMondayCodesQuery
>;
export const getApprovedAPS25MediaPage = /* GraphQL */ `query GetApprovedAPS25MediaPage($id: ID!) {
  getApprovedAPS25MediaPage(id: $id) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetApprovedAPS25MediaPageQueryVariables,
  APITypes.GetApprovedAPS25MediaPageQuery
>;
export const listApprovedAPS25MediaPages = /* GraphQL */ `query ListApprovedAPS25MediaPages(
  $filter: ModelApprovedAPS25MediaPageFilterInput
  $limit: Int
  $nextToken: String
) {
  listApprovedAPS25MediaPages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApprovedAPS25MediaPagesQueryVariables,
  APITypes.ListApprovedAPS25MediaPagesQuery
>;
export const getCourseOutlineRequest = /* GraphQL */ `query GetCourseOutlineRequest($id: ID!) {
  getCourseOutlineRequest(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCourseOutlineRequestQueryVariables,
  APITypes.GetCourseOutlineRequestQuery
>;
export const listCourseOutlineRequests = /* GraphQL */ `query ListCourseOutlineRequests(
  $filter: ModelCourseOutlineRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseOutlineRequests(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseOutlineRequestsQueryVariables,
  APITypes.ListCourseOutlineRequestsQuery
>;
export const getUserGameStats = /* GraphQL */ `query GetUserGameStats($id: ID!) {
  getUserGameStats(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserGameStatsQueryVariables,
  APITypes.GetUserGameStatsQuery
>;
export const listUserGameStats = /* GraphQL */ `query ListUserGameStats(
  $filter: ModelUserGameStatsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserGameStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserGameStatsQueryVariables,
  APITypes.ListUserGameStatsQuery
>;
export const getLeaderboardEntry = /* GraphQL */ `query GetLeaderboardEntry($id: ID!) {
  getLeaderboardEntry(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLeaderboardEntryQueryVariables,
  APITypes.GetLeaderboardEntryQuery
>;
export const listLeaderboardEntries = /* GraphQL */ `query ListLeaderboardEntries(
  $filter: ModelLeaderboardEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeaderboardEntries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLeaderboardEntriesQueryVariables,
  APITypes.ListLeaderboardEntriesQuery
>;
export const getAnswerEvent = /* GraphQL */ `query GetAnswerEvent($id: ID!) {
  getAnswerEvent(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAnswerEventQueryVariables,
  APITypes.GetAnswerEventQuery
>;
export const listAnswerEvents = /* GraphQL */ `query ListAnswerEvents(
  $filter: ModelAnswerEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnswerEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      termID
      correct
      latencyMs
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAnswerEventsQueryVariables,
  APITypes.ListAnswerEventsQuery
>;
export const getLessonTags = /* GraphQL */ `query GetLessonTags($id: ID!) {
  getLessonTags(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLessonTagsQueryVariables,
  APITypes.GetLessonTagsQuery
>;
export const listLessonTags = /* GraphQL */ `query ListLessonTags(
  $filter: ModelLessonTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  listLessonTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tagsId
      lessonId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLessonTagsQueryVariables,
  APITypes.ListLessonTagsQuery
>;
export const getCertificateByCategory = /* GraphQL */ `query GetCertificateByCategory($id: ID!) {
  getCertificateByCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCertificateByCategoryQueryVariables,
  APITypes.GetCertificateByCategoryQuery
>;
export const listCertificateByCategories = /* GraphQL */ `query ListCertificateByCategories(
  $filter: ModelCertificateByCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertificateByCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      categoryId
      certificateObjectId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCertificateByCategoriesQueryVariables,
  APITypes.ListCertificateByCategoriesQuery
>;
export const getCertificateCourses = /* GraphQL */ `query GetCertificateCourses($id: ID!) {
  getCertificateCourses(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCertificateCoursesQueryVariables,
  APITypes.GetCertificateCoursesQuery
>;
export const listCertificateCourses = /* GraphQL */ `query ListCertificateCourses(
  $filter: ModelCertificateCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertificateCourses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      certificateId
      courseId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCertificateCoursesQueryVariables,
  APITypes.ListCertificateCoursesQuery
>;
export const getArticleRelatedCourses = /* GraphQL */ `query GetArticleRelatedCourses($id: ID!) {
  getArticleRelatedCourses(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetArticleRelatedCoursesQueryVariables,
  APITypes.GetArticleRelatedCoursesQuery
>;
export const listArticleRelatedCourses = /* GraphQL */ `query ListArticleRelatedCourses(
  $filter: ModelArticleRelatedCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticleRelatedCourses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      courseId
      articleId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticleRelatedCoursesQueryVariables,
  APITypes.ListArticleRelatedCoursesQuery
>;
export const getUserCompletedLessons = /* GraphQL */ `query GetUserCompletedLessons($id: ID!) {
  getUserCompletedLessons(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserCompletedLessonsQueryVariables,
  APITypes.GetUserCompletedLessonsQuery
>;
export const listUserCompletedLessons = /* GraphQL */ `query ListUserCompletedLessons(
  $filter: ModelUserCompletedLessonsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserCompletedLessons(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lessonId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserCompletedLessonsQueryVariables,
  APITypes.ListUserCompletedLessonsQuery
>;
export const getAuthorTemplates = /* GraphQL */ `query GetAuthorTemplates($id: ID!) {
  getAuthorTemplates(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAuthorTemplatesQueryVariables,
  APITypes.GetAuthorTemplatesQuery
>;
export const listAuthorTemplates = /* GraphQL */ `query ListAuthorTemplates(
  $filter: ModelAuthorTemplatesFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthorTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      authorId
      indexTemplateId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorTemplatesQueryVariables,
  APITypes.ListAuthorTemplatesQuery
>;
export const getAchievementUsers = /* GraphQL */ `query GetAchievementUsers($id: ID!) {
  getAchievementUsers(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAchievementUsersQueryVariables,
  APITypes.GetAchievementUsersQuery
>;
export const listAchievementUsers = /* GraphQL */ `query ListAchievementUsers(
  $filter: ModelAchievementUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listAchievementUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      achievementId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAchievementUsersQueryVariables,
  APITypes.ListAchievementUsersQuery
>;
export const getCohortUsers = /* GraphQL */ `query GetCohortUsers($id: ID!) {
  getCohortUsers(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCohortUsersQueryVariables,
  APITypes.GetCohortUsersQuery
>;
export const listCohortUsers = /* GraphQL */ `query ListCohortUsers(
  $filter: ModelCohortUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listCohortUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      cohortId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCohortUsersQueryVariables,
  APITypes.ListCohortUsersQuery
>;
export const getUserWishlist = /* GraphQL */ `query GetUserWishlist($id: ID!) {
  getUserWishlist(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserWishlistQueryVariables,
  APITypes.GetUserWishlistQuery
>;
export const listUserWishlists = /* GraphQL */ `query ListUserWishlists(
  $filter: ModelUserWishlistFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserWishlists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      lMSCourseId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserWishlistsQueryVariables,
  APITypes.ListUserWishlistsQuery
>;
export const getCirriculumCourses = /* GraphQL */ `query GetCirriculumCourses($id: ID!) {
  getCirriculumCourses(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCirriculumCoursesQueryVariables,
  APITypes.GetCirriculumCoursesQuery
>;
export const listCirriculumCourses = /* GraphQL */ `query ListCirriculumCourses(
  $filter: ModelCirriculumCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCirriculumCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      lMSCirriculumId
      lMSCourseId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCirriculumCoursesQueryVariables,
  APITypes.ListCirriculumCoursesQuery
>;
export const getCourseLessons = /* GraphQL */ `query GetCourseLessons($id: ID!) {
  getCourseLessons(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCourseLessonsQueryVariables,
  APITypes.GetCourseLessonsQuery
>;
export const listCourseLessons = /* GraphQL */ `query ListCourseLessons(
  $filter: ModelCourseLessonsFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      lMSCourseId
      lMSLessonId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseLessonsQueryVariables,
  APITypes.ListCourseLessonsQuery
>;
export const getCourseInstructors = /* GraphQL */ `query GetCourseInstructors($id: ID!) {
  getCourseInstructors(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCourseInstructorsQueryVariables,
  APITypes.GetCourseInstructorsQuery
>;
export const listCourseInstructors = /* GraphQL */ `query ListCourseInstructors(
  $filter: ModelCourseInstructorsFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      lMSCourseId
      instructorId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseInstructorsQueryVariables,
  APITypes.ListCourseInstructorsQuery
>;
export const getAchievementCourses = /* GraphQL */ `query GetAchievementCourses($id: ID!) {
  getAchievementCourses(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAchievementCoursesQueryVariables,
  APITypes.GetAchievementCoursesQuery
>;
export const listAchievementCourses = /* GraphQL */ `query ListAchievementCourses(
  $filter: ModelAchievementCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  listAchievementCourses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCourseId
      achievementId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAchievementCoursesQueryVariables,
  APITypes.ListAchievementCoursesQuery
>;
export const getPartnerCourses = /* GraphQL */ `query GetPartnerCourses($id: ID!) {
  getPartnerCourses(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPartnerCoursesQueryVariables,
  APITypes.GetPartnerCoursesQuery
>;
export const listPartnerCourses = /* GraphQL */ `query ListPartnerCourses(
  $filter: ModelPartnerCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  listPartnerCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      lMSCourseId
      partnerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPartnerCoursesQueryVariables,
  APITypes.ListPartnerCoursesQuery
>;
export const getLibraryCourses = /* GraphQL */ `query GetLibraryCourses($id: ID!) {
  getLibraryCourses(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLibraryCoursesQueryVariables,
  APITypes.GetLibraryCoursesQuery
>;
export const listLibraryCourses = /* GraphQL */ `query ListLibraryCourses(
  $filter: ModelLibraryCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  listLibraryCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      lMSCourseId
      customerLibaryId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLibraryCoursesQueryVariables,
  APITypes.ListLibraryCoursesQuery
>;
export const getIndexTemplateRows = /* GraphQL */ `query GetIndexTemplateRows($id: ID!) {
  getIndexTemplateRows(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIndexTemplateRowsQueryVariables,
  APITypes.GetIndexTemplateRowsQuery
>;
export const listIndexTemplateRows = /* GraphQL */ `query ListIndexTemplateRows(
  $filter: ModelIndexTemplateRowsFilterInput
  $limit: Int
  $nextToken: String
) {
  listIndexTemplateRows(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      indexTemplateId
      indexRowId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIndexTemplateRowsQueryVariables,
  APITypes.ListIndexTemplateRowsQuery
>;
export const getPartnerAdminUsers = /* GraphQL */ `query GetPartnerAdminUsers($id: ID!) {
  getPartnerAdminUsers(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPartnerAdminUsersQueryVariables,
  APITypes.GetPartnerAdminUsersQuery
>;
export const listPartnerAdminUsers = /* GraphQL */ `query ListPartnerAdminUsers(
  $filter: ModelPartnerAdminUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listPartnerAdminUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      partnerId
      partnerAdminId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPartnerAdminUsersQueryVariables,
  APITypes.ListPartnerAdminUsersQuery
>;
export const tagsByTag = /* GraphQL */ `query TagsByTag(
  $tag: String!
  $sortDirection: ModelSortDirection
  $filter: ModelTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  tagsByTag(
    tag: $tag
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tag
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.TagsByTagQueryVariables, APITypes.TagsByTagQuery>;
export const categoriesByValue = /* GraphQL */ `query CategoriesByValue(
  $value: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  categoriesByValue(
    value: $value
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CategoriesByValueQueryVariables,
  APITypes.CategoriesByValueQuery
>;
export const certificatesBySlug = /* GraphQL */ `query CertificatesBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCertificateFilterInput
  $limit: Int
  $nextToken: String
) {
  certificatesBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CertificatesBySlugQueryVariables,
  APITypes.CertificatesBySlugQuery
>;
export const coursesBySlug = /* GraphQL */ `query CoursesBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  coursesBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoursesBySlugQueryVariables,
  APITypes.CoursesBySlugQuery
>;
export const lessonsBySlug = /* GraphQL */ `query LessonsBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelLessonFilterInput
  $limit: Int
  $nextToken: String
) {
  lessonsBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LessonsBySlugQueryVariables,
  APITypes.LessonsBySlugQuery
>;
export const seoByContent = /* GraphQL */ `query SeoByContent(
  $slugOrPath: String!
  $sortDirection: ModelSortDirection
  $filter: ModelSeoDocumentFilterInput
  $limit: Int
  $nextToken: String
) {
  seoByContent(
    slugOrPath: $slugOrPath
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SeoByContentQueryVariables,
  APITypes.SeoByContentQuery
>;
export const blogsBySlug = /* GraphQL */ `query BlogsBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  blogsBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BlogsBySlugQueryVariables,
  APITypes.BlogsBySlugQuery
>;
export const articlesBySlug = /* GraphQL */ `query ArticlesBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  articlesBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ArticlesBySlugQueryVariables,
  APITypes.ArticlesBySlugQuery
>;
export const careersBySlug = /* GraphQL */ `query CareersBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCareerFilterInput
  $limit: Int
  $nextToken: String
) {
  careersBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      slug
      title
      altName
      subhead
      media
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CareersBySlugQueryVariables,
  APITypes.CareersBySlugQuery
>;
export const usersByName = /* GraphQL */ `query UsersByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByNameQueryVariables,
  APITypes.UsersByNameQuery
>;
export const usersByEmail = /* GraphQL */ `query UsersByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByEmailQueryVariables,
  APITypes.UsersByEmailQuery
>;
export const usersByCompanyID = /* GraphQL */ `query UsersByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByCompanyIDQueryVariables,
  APITypes.UsersByCompanyIDQuery
>;
export const learningPathsBySlug = /* GraphQL */ `query LearningPathsBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelLearningPathFilterInput
  $limit: Int
  $nextToken: String
) {
  learningPathsBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LearningPathsBySlugQueryVariables,
  APITypes.LearningPathsBySlugQuery
>;
export const cMPMSessionsByEndDate = /* GraphQL */ `query CMPMSessionsByEndDate(
  $endDate: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCMPMSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  cMPMSessionsByEndDate(
    endDate: $endDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CMPMSessionsByEndDateQueryVariables,
  APITypes.CMPMSessionsByEndDateQuery
>;
export const cMPMSessionsByDeadline = /* GraphQL */ `query CMPMSessionsByDeadline(
  $deadline: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCMPMSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  cMPMSessionsByDeadline(
    deadline: $deadline
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CMPMSessionsByDeadlineQueryVariables,
  APITypes.CMPMSessionsByDeadlineQuery
>;
export const appStartsByEmail = /* GraphQL */ `query AppStartsByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelAppStartFilterInput
  $limit: Int
  $nextToken: String
) {
  appStartsByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AppStartsByEmailQueryVariables,
  APITypes.AppStartsByEmailQuery
>;
export const applicationStartsByEmail = /* GraphQL */ `query ApplicationStartsByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationStartFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationStartsByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationStartsByEmailQueryVariables,
  APITypes.ApplicationStartsByEmailQuery
>;
export const certAppStartsByTypeAndCreatedAt = /* GraphQL */ `query CertAppStartsByTypeAndCreatedAt(
  $type: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCertAppStartFilterInput
  $limit: Int
  $nextToken: String
) {
  certAppStartsByTypeAndCreatedAt(
    type: $type
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CertAppStartsByTypeAndCreatedAtQueryVariables,
  APITypes.CertAppStartsByTypeAndCreatedAtQuery
>;
export const certAppStartsByEmail = /* GraphQL */ `query CertAppStartsByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCertAppStartFilterInput
  $limit: Int
  $nextToken: String
) {
  certAppStartsByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CertAppStartsByEmailQueryVariables,
  APITypes.CertAppStartsByEmailQuery
>;
export const lMSCollectionsBySlug = /* GraphQL */ `query LMSCollectionsBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelLMSCollectionFilterInput
  $limit: Int
  $nextToken: String
) {
  lMSCollectionsBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LMSCollectionsBySlugQueryVariables,
  APITypes.LMSCollectionsBySlugQuery
>;
export const lMSCoursesByThinkificId = /* GraphQL */ `query LMSCoursesByThinkificId(
  $thinkificId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelLMSCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  lMSCoursesByThinkificId(
    thinkificId: $thinkificId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LMSCoursesByThinkificIdQueryVariables,
  APITypes.LMSCoursesByThinkificIdQuery
>;
export const lMSCoursesBySlug = /* GraphQL */ `query LMSCoursesBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelLMSCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  lMSCoursesBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LMSCoursesBySlugQueryVariables,
  APITypes.LMSCoursesBySlugQuery
>;
export const lMSLessonsBySlug = /* GraphQL */ `query LMSLessonsBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelLMSLessonFilterInput
  $limit: Int
  $nextToken: String
) {
  lMSLessonsBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LMSLessonsBySlugQueryVariables,
  APITypes.LMSLessonsBySlugQuery
>;
export const lMSModulesBySlug = /* GraphQL */ `query LMSModulesBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelLMSModuleFilterInput
  $limit: Int
  $nextToken: String
) {
  lMSModulesBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LMSModulesBySlugQueryVariables,
  APITypes.LMSModulesBySlugQuery
>;
export const trackedCoursesByCustomerIdAndClicks = /* GraphQL */ `query TrackedCoursesByCustomerIdAndClicks(
  $customerId: ID!
  $clicks: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelTrackedCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  trackedCoursesByCustomerIdAndClicks(
    customerId: $customerId
    clicks: $clicks
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      courseId
      clicks
      customerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TrackedCoursesByCustomerIdAndClicksQueryVariables,
  APITypes.TrackedCoursesByCustomerIdAndClicksQuery
>;
export const includedCoursesByCustomerId = /* GraphQL */ `query IncludedCoursesByCustomerId(
  $customerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIncludedCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  includedCoursesByCustomerId(
    customerId: $customerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      courseId
      customerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IncludedCoursesByCustomerIdQueryVariables,
  APITypes.IncludedCoursesByCustomerIdQuery
>;
export const customerLibariesBySlug = /* GraphQL */ `query CustomerLibariesBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCustomerLibaryFilterInput
  $limit: Int
  $nextToken: String
) {
  customerLibariesBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CustomerLibariesBySlugQueryVariables,
  APITypes.CustomerLibariesBySlugQuery
>;
export const workshopFormsByEmail = /* GraphQL */ `query WorkshopFormsByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelWorkshopFormFilterInput
  $limit: Int
  $nextToken: String
) {
  workshopFormsByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.WorkshopFormsByEmailQueryVariables,
  APITypes.WorkshopFormsByEmailQuery
>;
export const courseClicksByCourseID = /* GraphQL */ `query CourseClicksByCourseID(
  $courseID: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseClickFilterInput
  $limit: Int
  $nextToken: String
) {
  courseClicksByCourseID(
    courseID: $courseID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseClicksByCourseIDQueryVariables,
  APITypes.CourseClicksByCourseIDQuery
>;
export const lessonClicksByLessonID = /* GraphQL */ `query LessonClicksByLessonID(
  $LessonID: String!
  $sortDirection: ModelSortDirection
  $filter: ModelLessonClickFilterInput
  $limit: Int
  $nextToken: String
) {
  lessonClicksByLessonID(
    LessonID: $LessonID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LessonClicksByLessonIDQueryVariables,
  APITypes.LessonClicksByLessonIDQuery
>;
export const courseSearchesByTerm = /* GraphQL */ `query CourseSearchesByTerm(
  $term: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseSearchFilterInput
  $limit: Int
  $nextToken: String
) {
  courseSearchesByTerm(
    term: $term
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseSearchesByTermQueryVariables,
  APITypes.CourseSearchesByTermQuery
>;
export const indiaClicksByCourseID = /* GraphQL */ `query IndiaClicksByCourseID(
  $courseID: String!
  $sortDirection: ModelSortDirection
  $filter: ModelIndiaClickFilterInput
  $limit: Int
  $nextToken: String
) {
  indiaClicksByCourseID(
    courseID: $courseID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IndiaClicksByCourseIDQueryVariables,
  APITypes.IndiaClicksByCourseIDQuery
>;
export const indiaCourseSearchesByTerm = /* GraphQL */ `query IndiaCourseSearchesByTerm(
  $term: String!
  $sortDirection: ModelSortDirection
  $filter: ModelIndiaCourseSearchFilterInput
  $limit: Int
  $nextToken: String
) {
  indiaCourseSearchesByTerm(
    term: $term
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      term
      ipAddress
      country
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IndiaCourseSearchesByTermQueryVariables,
  APITypes.IndiaCourseSearchesByTermQuery
>;
export const indexTemplatesBySlug = /* GraphQL */ `query IndexTemplatesBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelIndexTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  indexTemplatesBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      slug
      title
      subhead
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IndexTemplatesBySlugQueryVariables,
  APITypes.IndexTemplatesBySlugQuery
>;
export const indexPagesBySlug = /* GraphQL */ `query IndexPagesBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelIndexPageFilterInput
  $limit: Int
  $nextToken: String
) {
  indexPagesBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IndexPagesBySlugQueryVariables,
  APITypes.IndexPagesBySlugQuery
>;
export const glossaryTermsByTerm = /* GraphQL */ `query GlossaryTermsByTerm(
  $term: String!
  $sortDirection: ModelSortDirection
  $filter: ModelGlossaryTermFilterInput
  $limit: Int
  $nextToken: String
) {
  glossaryTermsByTerm(
    term: $term
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GlossaryTermsByTermQueryVariables,
  APITypes.GlossaryTermsByTermQuery
>;
export const glossaryTermsByLetterAndTerm = /* GraphQL */ `query GlossaryTermsByLetterAndTerm(
  $letter: String!
  $term: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGlossaryTermFilterInput
  $limit: Int
  $nextToken: String
) {
  glossaryTermsByLetterAndTerm(
    letter: $letter
    term: $term
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GlossaryTermsByLetterAndTermQueryVariables,
  APITypes.GlossaryTermsByLetterAndTermQuery
>;
export const glossaryTermsByRandAndTerm = /* GraphQL */ `query GlossaryTermsByRandAndTerm(
  $rand: Int!
  $term: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGlossaryTermFilterInput
  $limit: Int
  $nextToken: String
) {
  glossaryTermsByRandAndTerm(
    rand: $rand
    term: $term
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GlossaryTermsByRandAndTermQueryVariables,
  APITypes.GlossaryTermsByRandAndTermQuery
>;
export const eventTemplatesBySlug = /* GraphQL */ `query EventTemplatesBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelEventTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  eventTemplatesBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EventTemplatesBySlugQueryVariables,
  APITypes.EventTemplatesBySlugQuery
>;
export const emailSubscriptionsByEmail = /* GraphQL */ `query EmailSubscriptionsByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelEmailSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  emailSubscriptionsByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EmailSubscriptionsByEmailQueryVariables,
  APITypes.EmailSubscriptionsByEmailQuery
>;
export const purchasesByEmail = /* GraphQL */ `query PurchasesByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelPurchaseFilterInput
  $limit: Int
  $nextToken: String
) {
  purchasesByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PurchasesByEmailQueryVariables,
  APITypes.PurchasesByEmailQuery
>;
export const testsByEmail = /* GraphQL */ `query TestsByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelTestFilterInput
  $limit: Int
  $nextToken: String
) {
  testsByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      totalTasks
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TestsByEmailQueryVariables,
  APITypes.TestsByEmailQuery
>;
export const courseReviewsByUserID = /* GraphQL */ `query CourseReviewsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  courseReviewsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      review
      rating
      createdAt
      userID
      thinkificId
      updatedAt
      userReviewsId
      lMSCourseReviewsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseReviewsByUserIDQueryVariables,
  APITypes.CourseReviewsByUserIDQuery
>;
export const courseReviewsByThinkificId = /* GraphQL */ `query CourseReviewsByThinkificId(
  $thinkificId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  courseReviewsByThinkificId(
    thinkificId: $thinkificId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      review
      rating
      createdAt
      userID
      thinkificId
      updatedAt
      userReviewsId
      lMSCourseReviewsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseReviewsByThinkificIdQueryVariables,
  APITypes.CourseReviewsByThinkificIdQuery
>;
export const ordersByEmail = /* GraphQL */ `query OrdersByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      name
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByEmailQueryVariables,
  APITypes.OrdersByEmailQuery
>;
export const ordersByUserID = /* GraphQL */ `query OrdersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      name
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByUserIDQueryVariables,
  APITypes.OrdersByUserIDQuery
>;
export const searchLogsByTimestampAndId = /* GraphQL */ `query SearchLogsByTimestampAndId(
  $timestamp: String!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSearchLogFilterInput
  $limit: Int
  $nextToken: String
) {
  searchLogsByTimestampAndId(
    timestamp: $timestamp
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      timestamp
      query
      results_count
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchLogsByTimestampAndIdQueryVariables,
  APITypes.SearchLogsByTimestampAndIdQuery
>;
export const userGameStatsByUserID = /* GraphQL */ `query UserGameStatsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserGameStatsFilterInput
  $limit: Int
  $nextToken: String
) {
  userGameStatsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserGameStatsByUserIDQueryVariables,
  APITypes.UserGameStatsByUserIDQuery
>;
export const leaderboardEntriesByKeyAndSortKey = /* GraphQL */ `query LeaderboardEntriesByKeyAndSortKey(
  $key: String!
  $sortKey: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLeaderboardEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  leaderboardEntriesByKeyAndSortKey(
    key: $key
    sortKey: $sortKey
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LeaderboardEntriesByKeyAndSortKeyQueryVariables,
  APITypes.LeaderboardEntriesByKeyAndSortKeyQuery
>;
export const leaderboardEntriesByUserIDAndPeriod = /* GraphQL */ `query LeaderboardEntriesByUserIDAndPeriod(
  $userID: ID!
  $period: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLeaderboardEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  leaderboardEntriesByUserIDAndPeriod(
    userID: $userID
    period: $period
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LeaderboardEntriesByUserIDAndPeriodQueryVariables,
  APITypes.LeaderboardEntriesByUserIDAndPeriodQuery
>;
export const answerEventsByUserIDAndCreatedAt = /* GraphQL */ `query AnswerEventsByUserIDAndCreatedAt(
  $userID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAnswerEventFilterInput
  $limit: Int
  $nextToken: String
) {
  answerEventsByUserIDAndCreatedAt(
    userID: $userID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      termID
      correct
      latencyMs
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AnswerEventsByUserIDAndCreatedAtQueryVariables,
  APITypes.AnswerEventsByUserIDAndCreatedAtQuery
>;
export const answerEventsByTermIDAndCreatedAt = /* GraphQL */ `query AnswerEventsByTermIDAndCreatedAt(
  $termID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAnswerEventFilterInput
  $limit: Int
  $nextToken: String
) {
  answerEventsByTermIDAndCreatedAt(
    termID: $termID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      termID
      correct
      latencyMs
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AnswerEventsByTermIDAndCreatedAtQueryVariables,
  APITypes.AnswerEventsByTermIDAndCreatedAtQuery
>;
export const lessonTagsByTagsId = /* GraphQL */ `query LessonTagsByTagsId(
  $tagsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLessonTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  lessonTagsByTagsId(
    tagsId: $tagsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tagsId
      lessonId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LessonTagsByTagsIdQueryVariables,
  APITypes.LessonTagsByTagsIdQuery
>;
export const lessonTagsByLessonId = /* GraphQL */ `query LessonTagsByLessonId(
  $lessonId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLessonTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  lessonTagsByLessonId(
    lessonId: $lessonId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tagsId
      lessonId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LessonTagsByLessonIdQueryVariables,
  APITypes.LessonTagsByLessonIdQuery
>;
export const certificateByCategoriesByCategoryId = /* GraphQL */ `query CertificateByCategoriesByCategoryId(
  $categoryId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCertificateByCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  certificateByCategoriesByCategoryId(
    categoryId: $categoryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      categoryId
      certificateObjectId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CertificateByCategoriesByCategoryIdQueryVariables,
  APITypes.CertificateByCategoriesByCategoryIdQuery
>;
export const certificateByCategoriesByCertificateObjectId = /* GraphQL */ `query CertificateByCategoriesByCertificateObjectId(
  $certificateObjectId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCertificateByCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  certificateByCategoriesByCertificateObjectId(
    certificateObjectId: $certificateObjectId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      categoryId
      certificateObjectId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CertificateByCategoriesByCertificateObjectIdQueryVariables,
  APITypes.CertificateByCategoriesByCertificateObjectIdQuery
>;
export const certificateCoursesByCertificateId = /* GraphQL */ `query CertificateCoursesByCertificateId(
  $certificateId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCertificateCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  certificateCoursesByCertificateId(
    certificateId: $certificateId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      certificateId
      courseId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CertificateCoursesByCertificateIdQueryVariables,
  APITypes.CertificateCoursesByCertificateIdQuery
>;
export const certificateCoursesByCourseId = /* GraphQL */ `query CertificateCoursesByCourseId(
  $courseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCertificateCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  certificateCoursesByCourseId(
    courseId: $courseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      certificateId
      courseId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CertificateCoursesByCourseIdQueryVariables,
  APITypes.CertificateCoursesByCourseIdQuery
>;
export const articleRelatedCoursesByCourseId = /* GraphQL */ `query ArticleRelatedCoursesByCourseId(
  $courseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelArticleRelatedCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  articleRelatedCoursesByCourseId(
    courseId: $courseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      courseId
      articleId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ArticleRelatedCoursesByCourseIdQueryVariables,
  APITypes.ArticleRelatedCoursesByCourseIdQuery
>;
export const articleRelatedCoursesByArticleId = /* GraphQL */ `query ArticleRelatedCoursesByArticleId(
  $articleId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelArticleRelatedCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  articleRelatedCoursesByArticleId(
    articleId: $articleId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      courseId
      articleId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ArticleRelatedCoursesByArticleIdQueryVariables,
  APITypes.ArticleRelatedCoursesByArticleIdQuery
>;
export const userCompletedLessonsByLessonId = /* GraphQL */ `query UserCompletedLessonsByLessonId(
  $lessonId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserCompletedLessonsFilterInput
  $limit: Int
  $nextToken: String
) {
  userCompletedLessonsByLessonId(
    lessonId: $lessonId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lessonId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserCompletedLessonsByLessonIdQueryVariables,
  APITypes.UserCompletedLessonsByLessonIdQuery
>;
export const userCompletedLessonsByUserId = /* GraphQL */ `query UserCompletedLessonsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserCompletedLessonsFilterInput
  $limit: Int
  $nextToken: String
) {
  userCompletedLessonsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lessonId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserCompletedLessonsByUserIdQueryVariables,
  APITypes.UserCompletedLessonsByUserIdQuery
>;
export const authorTemplatesByAuthorId = /* GraphQL */ `query AuthorTemplatesByAuthorId(
  $authorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorTemplatesFilterInput
  $limit: Int
  $nextToken: String
) {
  authorTemplatesByAuthorId(
    authorId: $authorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorId
      indexTemplateId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AuthorTemplatesByAuthorIdQueryVariables,
  APITypes.AuthorTemplatesByAuthorIdQuery
>;
export const authorTemplatesByIndexTemplateId = /* GraphQL */ `query AuthorTemplatesByIndexTemplateId(
  $indexTemplateId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorTemplatesFilterInput
  $limit: Int
  $nextToken: String
) {
  authorTemplatesByIndexTemplateId(
    indexTemplateId: $indexTemplateId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorId
      indexTemplateId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AuthorTemplatesByIndexTemplateIdQueryVariables,
  APITypes.AuthorTemplatesByIndexTemplateIdQuery
>;
export const achievementUsersByUserId = /* GraphQL */ `query AchievementUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAchievementUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  achievementUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      achievementId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AchievementUsersByUserIdQueryVariables,
  APITypes.AchievementUsersByUserIdQuery
>;
export const achievementUsersByAchievementId = /* GraphQL */ `query AchievementUsersByAchievementId(
  $achievementId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAchievementUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  achievementUsersByAchievementId(
    achievementId: $achievementId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      achievementId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AchievementUsersByAchievementIdQueryVariables,
  APITypes.AchievementUsersByAchievementIdQuery
>;
export const cohortUsersByUserId = /* GraphQL */ `query CohortUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCohortUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  cohortUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      cohortId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CohortUsersByUserIdQueryVariables,
  APITypes.CohortUsersByUserIdQuery
>;
export const cohortUsersByCohortId = /* GraphQL */ `query CohortUsersByCohortId(
  $cohortId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCohortUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  cohortUsersByCohortId(
    cohortId: $cohortId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      cohortId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CohortUsersByCohortIdQueryVariables,
  APITypes.CohortUsersByCohortIdQuery
>;
export const userWishlistsByUserId = /* GraphQL */ `query UserWishlistsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserWishlistFilterInput
  $limit: Int
  $nextToken: String
) {
  userWishlistsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      lMSCourseId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserWishlistsByUserIdQueryVariables,
  APITypes.UserWishlistsByUserIdQuery
>;
export const userWishlistsByLMSCourseId = /* GraphQL */ `query UserWishlistsByLMSCourseId(
  $lMSCourseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserWishlistFilterInput
  $limit: Int
  $nextToken: String
) {
  userWishlistsByLMSCourseId(
    lMSCourseId: $lMSCourseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      lMSCourseId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserWishlistsByLMSCourseIdQueryVariables,
  APITypes.UserWishlistsByLMSCourseIdQuery
>;
export const cirriculumCoursesByLMSCirriculumId = /* GraphQL */ `query CirriculumCoursesByLMSCirriculumId(
  $lMSCirriculumId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCirriculumCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  cirriculumCoursesByLMSCirriculumId(
    lMSCirriculumId: $lMSCirriculumId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCirriculumId
      lMSCourseId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CirriculumCoursesByLMSCirriculumIdQueryVariables,
  APITypes.CirriculumCoursesByLMSCirriculumIdQuery
>;
export const cirriculumCoursesByLMSCourseId = /* GraphQL */ `query CirriculumCoursesByLMSCourseId(
  $lMSCourseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCirriculumCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  cirriculumCoursesByLMSCourseId(
    lMSCourseId: $lMSCourseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCirriculumId
      lMSCourseId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CirriculumCoursesByLMSCourseIdQueryVariables,
  APITypes.CirriculumCoursesByLMSCourseIdQuery
>;
export const courseLessonsByLMSCourseId = /* GraphQL */ `query CourseLessonsByLMSCourseId(
  $lMSCourseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseLessonsFilterInput
  $limit: Int
  $nextToken: String
) {
  courseLessonsByLMSCourseId(
    lMSCourseId: $lMSCourseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCourseId
      lMSLessonId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseLessonsByLMSCourseIdQueryVariables,
  APITypes.CourseLessonsByLMSCourseIdQuery
>;
export const courseLessonsByLMSLessonId = /* GraphQL */ `query CourseLessonsByLMSLessonId(
  $lMSLessonId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseLessonsFilterInput
  $limit: Int
  $nextToken: String
) {
  courseLessonsByLMSLessonId(
    lMSLessonId: $lMSLessonId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCourseId
      lMSLessonId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseLessonsByLMSLessonIdQueryVariables,
  APITypes.CourseLessonsByLMSLessonIdQuery
>;
export const courseInstructorsByLMSCourseId = /* GraphQL */ `query CourseInstructorsByLMSCourseId(
  $lMSCourseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseInstructorsFilterInput
  $limit: Int
  $nextToken: String
) {
  courseInstructorsByLMSCourseId(
    lMSCourseId: $lMSCourseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCourseId
      instructorId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseInstructorsByLMSCourseIdQueryVariables,
  APITypes.CourseInstructorsByLMSCourseIdQuery
>;
export const courseInstructorsByInstructorId = /* GraphQL */ `query CourseInstructorsByInstructorId(
  $instructorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseInstructorsFilterInput
  $limit: Int
  $nextToken: String
) {
  courseInstructorsByInstructorId(
    instructorId: $instructorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCourseId
      instructorId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseInstructorsByInstructorIdQueryVariables,
  APITypes.CourseInstructorsByInstructorIdQuery
>;
export const achievementCoursesByLMSCourseId = /* GraphQL */ `query AchievementCoursesByLMSCourseId(
  $lMSCourseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAchievementCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  achievementCoursesByLMSCourseId(
    lMSCourseId: $lMSCourseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCourseId
      achievementId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AchievementCoursesByLMSCourseIdQueryVariables,
  APITypes.AchievementCoursesByLMSCourseIdQuery
>;
export const achievementCoursesByAchievementId = /* GraphQL */ `query AchievementCoursesByAchievementId(
  $achievementId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAchievementCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  achievementCoursesByAchievementId(
    achievementId: $achievementId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCourseId
      achievementId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AchievementCoursesByAchievementIdQueryVariables,
  APITypes.AchievementCoursesByAchievementIdQuery
>;
export const partnerCoursesByLMSCourseId = /* GraphQL */ `query PartnerCoursesByLMSCourseId(
  $lMSCourseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPartnerCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  partnerCoursesByLMSCourseId(
    lMSCourseId: $lMSCourseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCourseId
      partnerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PartnerCoursesByLMSCourseIdQueryVariables,
  APITypes.PartnerCoursesByLMSCourseIdQuery
>;
export const partnerCoursesByPartnerId = /* GraphQL */ `query PartnerCoursesByPartnerId(
  $partnerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPartnerCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  partnerCoursesByPartnerId(
    partnerId: $partnerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCourseId
      partnerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PartnerCoursesByPartnerIdQueryVariables,
  APITypes.PartnerCoursesByPartnerIdQuery
>;
export const libraryCoursesByLMSCourseId = /* GraphQL */ `query LibraryCoursesByLMSCourseId(
  $lMSCourseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLibraryCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  libraryCoursesByLMSCourseId(
    lMSCourseId: $lMSCourseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCourseId
      customerLibaryId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LibraryCoursesByLMSCourseIdQueryVariables,
  APITypes.LibraryCoursesByLMSCourseIdQuery
>;
export const libraryCoursesByCustomerLibaryId = /* GraphQL */ `query LibraryCoursesByCustomerLibaryId(
  $customerLibaryId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLibraryCoursesFilterInput
  $limit: Int
  $nextToken: String
) {
  libraryCoursesByCustomerLibaryId(
    customerLibaryId: $customerLibaryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lMSCourseId
      customerLibaryId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LibraryCoursesByCustomerLibaryIdQueryVariables,
  APITypes.LibraryCoursesByCustomerLibaryIdQuery
>;
export const indexTemplateRowsByIndexTemplateId = /* GraphQL */ `query IndexTemplateRowsByIndexTemplateId(
  $indexTemplateId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIndexTemplateRowsFilterInput
  $limit: Int
  $nextToken: String
) {
  indexTemplateRowsByIndexTemplateId(
    indexTemplateId: $indexTemplateId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      indexTemplateId
      indexRowId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IndexTemplateRowsByIndexTemplateIdQueryVariables,
  APITypes.IndexTemplateRowsByIndexTemplateIdQuery
>;
export const indexTemplateRowsByIndexRowId = /* GraphQL */ `query IndexTemplateRowsByIndexRowId(
  $indexRowId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIndexTemplateRowsFilterInput
  $limit: Int
  $nextToken: String
) {
  indexTemplateRowsByIndexRowId(
    indexRowId: $indexRowId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      indexTemplateId
      indexRowId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IndexTemplateRowsByIndexRowIdQueryVariables,
  APITypes.IndexTemplateRowsByIndexRowIdQuery
>;
export const partnerAdminUsersByPartnerId = /* GraphQL */ `query PartnerAdminUsersByPartnerId(
  $partnerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPartnerAdminUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  partnerAdminUsersByPartnerId(
    partnerId: $partnerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      partnerId
      partnerAdminId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PartnerAdminUsersByPartnerIdQueryVariables,
  APITypes.PartnerAdminUsersByPartnerIdQuery
>;
export const partnerAdminUsersByPartnerAdminId = /* GraphQL */ `query PartnerAdminUsersByPartnerAdminId(
  $partnerAdminId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPartnerAdminUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  partnerAdminUsersByPartnerAdminId(
    partnerAdminId: $partnerAdminId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      partnerId
      partnerAdminId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PartnerAdminUsersByPartnerAdminIdQueryVariables,
  APITypes.PartnerAdminUsersByPartnerAdminIdQuery
>;

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Story from './views/Stories/Story.vue'
import Account from './views/Accounts/Account.vue'
import About from './views/About.vue'
import Review from './views/Reviews/Review.vue'
import StoyTail from './views/StoryTails/StoryTail.vue'
import AccountInfo from './views/Accounts/AccountInfo.vue'
import StoryInfo from './views/Stories/StoryInfo.vue'
import CreateAccount from './views/Accounts/AccountCreate.vue'
import CreateStory from './views/Stories/StoryCreate.vue'
import CreateStoryTail from './views/StoryTails/StoryTailCreate.vue'
import ReviewInfo from './views/Reviews/ReviewInfo.vue'
import PutAccount from './views/Accounts/AccountPut.vue'
import PatchStory from './views/Stories/StoryPatch.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/stories',
      name: 'Story',
      component: Story
    },
    {
      path: '/reviews',
      name: 'Review',
      component: Review
    },
    {
      path: '/accounts',
      name: 'Account',
      component: Account
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/storytails',
      name: 'Story Tail',
      component: StoyTail
    },
    {
      path: '/accounts/:accountId',
      name: 'Account Info',
      component: AccountInfo
    },
    {
      path: '/accounts/:accountId/stories/:storyId',
      name: 'Story Info',
      component: StoryInfo
    },
    {
      path: '/stories/:storyId',
      name: 'Story Info',
      component: StoryInfo
    },
    {
      path: '/postaccounts',
      name: 'Create Account',
      component: CreateAccount
    },
    {
      path: '/accounts/:accountId/stories',
      name: 'Create story',
      component: CreateStory
    },
    {
      path: '/stories/:storyId/storytails',
      name: 'Review Info',
      component: CreateStoryTail
    },
    {
      path: '/reviews/:reviewId',
      name: 'Create review',
      component: ReviewInfo
    },
    {
      path: '/putaccounts/:accountId',
      name: 'Put account',
      component: PutAccount
    },
    {
      path: '/patchstories/:storyId',
      name: 'Patch story',
      component: PatchStory
    }
  ]
})

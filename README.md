# LaunchDarkly Solution Engineering: React Workshop

<p align="left">
    <img width="112" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png">&nbsp;<img width="100" height="100" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/b5qnw15lckk72stqydxp">
</p>

## Overview

This repo contains a sample React app for use during SE-led Workshops.

This Workshop is a guided coding exercise to showcase LaunchDarkly and facilitate learning. Attendees will start from a simple app, progressively add new features to it, then release those features using feature flags.

## About the app

During the Workshop, attendees will transform a "stock" React app into a new React version of the [Dinosaur Game](https://en.wikipedia.org/wiki/Dinosaur_Game) found in Chrome. You'll start with a default React app and work through a series of steps to build up the game.

This repo contains the output of `create-react-app`. The only modifications include:
 * The [LaunchDarkly React Client SDK](https://github.com/launchdarkly/react-client-sdk) has been added to `package.json`
 * A `.env.local` file has been added at the project root
 * `images` and `sounds` have been added to the `public` folder
 * A `workshop` folder containing the final version of the app files for each step of the exercise has been added at the project root

## Workshop Setup

### LaunchDarkly

#### Participants

As a Workshop attendee, you'll need access to a LaunchDarkly Account and Project to fully participate in this session.

* If you're not already signed up, you will receive an email invitation to LaunchDarkly from the Workshop faciliator or LaunchDarkly Account owner
* Participants should verify they can log into the Workshop Project and have (or can create) their own **Environment**

#### Flags

* The facilitator/attendees will need a Project to house the flags we'll use during the Workshop
* Create the following feature flags in the Workshop project prior to/during the session:

| Name      | Key | SDK Availability | Type | Variations | Default | Tag (optional) |
| --------- | ---- | ---------------- | ---- | ---------- | ------- | ----|
| Dark Mode | dark-mode | :white_check_mark: "SDKs using Client-side ID" | bool | true, false| false | master |
| Game Theme| game-theme | :white_check_mark: "SDKs using Client-side ID" | string | Dino, Space | Dino | master |
| Runner Speed | runner-speed | :white_check_mark: "SDKs using Client-side ID" | number | 2, 6, 8, 12, 24 | 8 | master |
| Gravity   | gravity | :white_check_mark: "SDKs using Client-side ID" | number | 1, 0.6, 0.3, 0.1 | 0.6 | master |
| Show Details | show-details | :white_check_mark: "SDKs using Client-side ID" | bool | true, false | false | master |

### Code

#### Setup

Attendees can use their favorite editor/IDE for React development to work through the coding exercise.

While there are many, here are some cloud-based options we've used successfully:
* [Repl.it](https://replit.com/)
* [Gitpod.io](gitpod.io)

> **Note:** Here's a quick and easy setup for Gitpod:
> 1. Fork this repo: [https://github.com/launchdarkly-labs/se-react-workshop](https://github.com/launchdarkly-labs/se-react-workshop)
> 2. Log into/register for [Gitpod.io](https://gitpod.io)
> 3. Create a new Workspace
> 4. Select your forked repo from "Open in Gitpod"
> 5. When you see your Workspace created, you're ready to get started

## Session Walkthrough

This session work will be split into five steps (1, 2, 3, 4, final). During each step, we'll make noticable changes to the original/previous codebase and then run the app to see the differences. 

Attendees can follow along or simply replace the contents of each file involved in each step with the contents of the file located in that step's folder under `workshop`. 

For example, to see the final result of step one, replace the app files with the files located in `workshop/step1`. To see the final working app, replace the contents of `src` with the contents of `workshop/final`.
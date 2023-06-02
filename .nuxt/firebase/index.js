import createApp from './app.js'

import authService from './service.auth.js'

const appConfig = {"apiKey":"AIzaSyACzjFNg_jHIP1lklThhasmY5kXB9t2MnI","authDomain":"lmbackyard.firebaseapp.com","databaseURL":"https:\u002F\u002Flmbackyard-default-rtdb.europe-west1.firebasedatabase.app\u002F","projectId":"lmbackyard","storageBucket":"lmbackyard.appspot.com","messagingSenderId":"581546464216","appId":"1:581546464216:web:0a3977ccf5daa9ad7598ad","measurementId":"G-552YG7Q05Q"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}
// Utilities
import Session from '@/models/Session'
import router from '@/router'
import ConstantTool from '@/services/tools/ConstantTool'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      session: new Session() as Session
    }
  },

  actions: {
    setSession(session: Session) {
      localStorage.removeItem(ConstantTool.SESSION_KEY)
      this.session = session
      this.saveSession()
    },

    saveSession() {
      localStorage.setItem(ConstantTool.SESSION_KEY, JSON.stringify(this.session))
    },

    loadSession() {
      let cachedSession = localStorage.getItem(ConstantTool.SESSION_KEY)
      if (cachedSession != null) {
        this.session = JSON.parse(cachedSession)
      }
    },

    destroySession() {
      this.session = new Session()
      this.saveSession()
    },

    async checkSession() {      
      this.loadSession()

      if (this.session.token == undefined) {
        router.push("/auth/login")
        return
      }

      try {
        //Call api do check session and store it in this variable
        let session: Session = new Session()
        console.log(session)
        this.setSession(session)
      } catch (e) {
        this.destroySession()
        router.push("/auth/login")
      }
    },
  }
})

// import { createPinia, defineStore } from 'pinia';

// function getRandomDate() {
//   const start = new Date(2022, 0, 1);
//   const end = new Date(2023, 11, 31);
//   const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   return randomDate.toLocaleDateString();
// }

// export const useApplicationStore = defineStore('applicationStore', {
//   state: () => ({
//     applications: [
//       { id: 1, product: 'QOD', flag: 'NAME_MATCH', appId: '66586503482cab8e0833d122', customerName: 'JHUNWALA', assignedTo: '19514', decisionBy: '19514', raisedOn: getRandomDate(), resolved: getRandomDate(), expiry: getRandomDate(), status: 'APPROVED' },
//       { id: 2, product: 'MF', flag: 'NAME_MATCH', appId: '664da66f36a7d17e12dac6c4', customerName: 'aditya sanjay jarag', assignedTo: 'FC20082', decisionBy: 'FC20082', raisedOn: getRandomDate(), resolved: getRandomDate(), expiry: getRandomDate(), status: 'APPROVED' },
//       { id: 3, product: 'QOD', flag: 'NAME_MATCH', appId: '663cadb916d209271957dc3a', customerName: 'basudev pal', assignedTo: 'FC19255', decisionBy: 'FC19255', raisedOn: getRandomDate(), resolved: getRandomDate(), expiry: getRandomDate(), status: 'APPROVED' },
//       { id: 4, product: 'MF', flag: 'NAME_MATCH', appId: '663c6462261bce18e27c7888', customerName: 'shashikala rathnakar nilagula', assignedTo: 'FC20082', decisionBy: 'FC20082', raisedOn: getRandomDate(), resolved: getRandomDate(), expiry: getRandomDate(), status: 'APPROVED' },
//       { id: 5, product: 'QOD', flag: 'NAME_MATCH', appId: '663c74d649a9d23a542fa03e', customerName: 'JHUNWALA', assignedTo: 'FC19255', decisionBy: 'FC19255', raisedOn: getRandomDate(), resolved: getRandomDate(), expiry: getRandomDate(), status: 'DECLINED' },
//       { id: 5, product: 'QOD', flag: 'NAME_MATCH', appId: '663c74d649a9d23a542fa03e', customerName: 'JHUNWALA', assignedTo: 'FC19255', decisionBy: 'FC19255', raisedOn: getRandomDate(), resolved: getRandomDate(), expiry: getRandomDate(), status: 'DECLINED' },
//       { id: 6, product: 'SP', flag: 'NAME_MATCH', appId: '663c74d649a9d23a542fa03e', customerName: 'JHUNWALA', assignedTo: 'FC19255', decisionBy: 'FC19255', raisedOn: getRandomDate(), resolved: getRandomDate(), expiry: getRandomDate(), status: 'DECLINED' },
//       { id: 7, product: 'SP', flag: 'NAME_MATCH', appId: '663c74d649a9d23a542fa03e', customerName: 'JHUNWALA', assignedTo: 'FC19255', decisionBy: 'FC19255', raisedOn: getRandomDate(), resolved: getRandomDate(), expiry: getRandomDate(), status: 'DECLINED' },
//       { id: 8, product: 'CA', flag: 'NAME_MATCH', appId: '663c74d649a9d23a542fa03e', customerName: 'JHUNWALA', assignedTo: 'FC19255', decisionBy: 'FC19255', raisedOn: getRandomDate(), resolved: getRandomDate(), expiry: getRandomDate(), status: 'DECLINED' },
//       { id: 8, product: 'CA', flag: 'NAME_MATCH', appId: '663c74d649a9d23a542fa03e', customerName: 'JHUNWALA', assignedTo: 'FC19255', decisionBy: 'FC19255', raisedOn: getRandomDate(), resolved: getRandomDate(), expiry: getRandomDate(), status: 'DECLINED' },
//       // Add more dummy data as needed
//     ],
//     selectedFlag: '',
//     isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
//     loginError: '',
//   }),
//   actions: {
//     setFlag(flag) {
//       this.selectedFlag = flag;
//     },
//     getApplicationById(id) {
//       return this.applications.find(app => app.id === Number(id));
//     },
//     login(username, password) {
//       const dummyCreds = {
//         CPA: [
//           { username: 'user1', password: '1234' },
//           { username: 'user3', password: '1234' }
//         ],
//         CM: [
//           { username: 'user2', password: '1234' },
//           { username: 'user4', password: '1234' }
//         ]
//       };

//       let foundUser = null;
//       let userRole = '';

//       for (const role in dummyCreds) {
//         foundUser = dummyCreds[role].find(user => user.username === username && user.password === password);
//         if (foundUser) {
//           userRole = role;
//           break;
//         }
//       }

//       if (foundUser) {
//         this.isAuthenticated = true;
//         this.loginError = '';
//         this.userRole = userRole;
//         localStorage.setItem('isAuthenticated', 'true');
//         localStorage.setItem('userRole', this.userRole);
//       } else {
//         this.isAuthenticated = false;
//         this.loginError = 'Invalid username or password';
//         localStorage.removeItem('isAuthenticated');
//         localStorage.removeItem('userRole');
//       }
//     },
//     logout() {
//       this.isAuthenticated = false;
//       this.selectedFlag = '';
//       this.userRole = '';
//       localStorage.removeItem('isAuthenticated');
//       localStorage.removeItem('userRole');
//     }
//   },
//   getters: {
//     filteredApplications(state) {
//       if (state.selectedFlag === '') {
//         return state.applications;
//       }
//       return state.applications.filter(app => app.flag === state.selectedFlag);
//     },
//   }
// });

// export const useUserStore = defineStore('userStore', {
//   state: () => ({
//     user: JSON.parse(localStorage.getItem('loggedInUser')) || null,
//   }),
//   actions: {
//     login(user) {
//       this.user = user;
//       localStorage.setItem('loggedInUser', JSON.stringify(user));
//     },
//     logout() {
//       this.user = null;
//       localStorage.removeItem('loggedInUser');
//     }
//   },
//   getters: {
//     isLoggedIn: (state) => !!state.user,
//   }
// });

// const pinia = createPinia();
// export default pinia;


// ***********************************************************************************

import { createPinia, defineStore } from 'pinia';
import users from '../../database/users.json';
import applications from '../../database/applications.json';

export const useApplicationStore = defineStore('applicationStore', {
  state: () => ({
    applications: applications,
    selectedFlag: '',
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    loginError: '',
    user: JSON.parse(localStorage.getItem('loggedInUser')) || null,
  }),
  actions: {
    setFlag(flag) {
      this.selectedFlag = flag;
    },
    getApplicationById(id) {
      return this.applications.find(app => app.id === Number(id));
    },
    login(username, password) {
      const user = users.find(
        (user) => 
          (user.email.toLowerCase() === username.toLowerCase() || user.name.toLowerCase() === username.toLowerCase()) &&
          user.password === password
      );

      if (user) {
        this.isAuthenticated = true;
        this.loginError = '';
        this.user = user;
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('loggedInUser', JSON.stringify(user));
      } else {
        this.isAuthenticated = false;
        this.loginError = 'Invalid username or password';
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('loggedInUser');
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.selectedFlag = '';
      this.user = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('loggedInUser');
    }
  },
  getters: {
    filteredApplications(state) {
      if (state.selectedFlag === '') {
        return state.applications;
      }
      return state.applications.filter(app => app.flag === state.selectedFlag);
    },
  }
});

const pinia = createPinia();
export default pinia;

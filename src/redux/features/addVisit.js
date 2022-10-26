import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

const initialState = {
    visitorList: [],
    visitorFor: 'self',
    visitorType: 'visitor',
    isWifiRequired: false,
    visitingLocation: null,
    buildingName: null,
    visitorSubType: null,
    visitIntiation: dayjs(),
    visitUntil: dayjs(),
    purposeOfVisit: 'Official',
    visitorCompanyAddress: null,
    singlePointOfContact: false,
    noOfVisitor: '',
    attendance_location:'',
    wifi_duration:null,
    employeeSearch:'',
    searchEmailVisitor:'',
    searchPhoneVisitor:''
}

const visitorForSlice = createSlice({
    name: 'addVisit',
    initialState,
    reducers: {
        visitorFor: (state) => {
            state.visitorFor = state.visitorFor === 'self' ? 'others' : 'self'
        },
        visitorType: (state) => {
            state.visitorType = state.visitorType === 'visitor' ? 'vendor' : 'visitor'
        },
        wifiRequired: (state) => {
            state.isWifiRequired = !state.isWifiRequired
        },
        noOfVisitor: (state, action) => {
            state.noOfVisitor = action.payload
        },
        visitingLocation: (state, action) => {
            state.visitingLocation = action.payload
        },
        buildingName: (state, action) => {
            state.buildingName = action.payload
        },
        visitorSubType: (state, action) => {
            state.visitorSubType = action.payload
        },
        purposeOfVisit: (state, action) => {
            state.purposeOfVisit = action.payload
        },
        visitorCompanyAddress: (state, action) => {
            state.visitorCompanyAddress = action.payload
        },
        singlePointOfContact: (state, action) => {
            state.singlePointOfContact = !state.singlePointOfContact
        },
        visitIntiation: (state, action) => {
            state.visitIntiation = action.payload
        },

        visitUntilChange: (state, action) => {
            // console.log('inside redux', action.payload);
            state.visitUntil = action.payload
        },

        // Visitor List Table
        visitorList: (state, action) => {
            state.visitorList = action.payload
        },

        wifiDurationChange: (state,action) => {
            state.wifi_duration = action.payload
        }
,
        employeeSearchChange : (state, action) =>{
            state.employeeSearch = action.payload
        },

  

        
        



    }
})

export const { visitorFor, visitorType, visitingLocation, buildingName, visitorSubType, wifiRequired, noOfVisitor, purposeOfVisit, visitorCompanyAddress, singlePointOfContact, visitUntilChange, visitIntiation, visitorList , wifiDurationChange, employeeSearchChange} = visitorForSlice.actions

export default visitorForSlice.reducer
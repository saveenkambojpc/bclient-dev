import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    visitorFor: 'self',
    visitorType: 'visitor',
    isWifiRequired: false,
    visitingLocation: '',
    buildingName: '',
    visitorSubType: '',
    visitIntiation: '',
    validUntil: '',
    purposeOfVisit: '',
    visitorCompanyAddress: '',
    singlePointOfContact: false,
    noOfVisitor: null,

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
        }



    }
})

export const { visitorFor, visitorType, visitingLocation, buildingName, visitorSubType, wifiRequired, noOfVisitor, purposeOfVisit, visitorCompanyAddress, singlePointOfContact } = visitorForSlice.actions

export default visitorForSlice.reducer
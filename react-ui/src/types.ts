import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { reducers } from "./redux/reduxStore"

export type buttonPropsType = {
    icon?: string
    text?: string
    handleClick: (icon: string) => void
}

export type cardPropsType = {
    status: string
    commitMessage: string
    buildNumber: number
    branchName: string
    commitHash: string
    authorName: string
    shouldDirectionColumn?: string | undefined
    id: string
    start: string | undefined
    duration: number | undefined

}

export type cardDataType = {
    status: string
    commitMessage: string
    buildNumber: number
    branchName: string
    commitHash: string
    authorName: string
    id: string
    duration: number | undefined
    start: string | undefined
}

export type ErrorWindowPropsType = {
    errorText: string
    cancelError: () => void
}

export type HeaderPropsType = {
    headerText: string
    ComandButtonText?: string
    ComandButtonIcon?: string
    settingIcon?: string
}

export type buildDetailsDataType = {
    authorName: string
    branchName: string
    buildNumber: number
    commitHash: string
    commitMessage: string
    configurationId?: string
    id: string
    status: string
    logs?: string
    duration: number | undefined
    start: string | undefined


}
export type detailsContentDataType = {
    status: string
    commitMessage: string
    buildNumber: number
    branchName: string
    commitHash: string
    authorName: string
    id: string
    duration: number | undefined
    logs?: string
    start: string | undefined
}

export type buildListData = {
    authorName: string
    branchName: string
    buildNumber: number
    commitHash: string
    commitMessage: string
    configurationId: string
    id: string
    status: string
    start: string | undefined
    duration: number | undefined
}

export type buildListDataUiType = {
    isShowBuildForm: boolean
    isShowLoader: boolean
    isAddNewBuild: boolean
}

export type confDataType = {
    repoName: string,
    buildCommand: string,
    mainBranch: string,
    period: number,
}

export type settingUiType = {
    isConfigError: boolean
    isSettingConfig: boolean
    isSettingLoading: boolean
    isShowLoader: boolean
    isChengePage: boolean
    isSettingsSend: boolean
}

export type settingType = {
    buildCommand: string,
    mainBranch: string,
    period: string,
    repoName: string,
}

export type getSettingConfType = {
    statusText: string
    data: {
        data: confDataType
    }
}

export type postBuildRequestType = {
    data: {
        data: {
            buildNumber: number
            id: string
            status: string
        }
    }
}
export type getBuildsLogsType = {
    data: string
}

export type getBuildsListType = {
    statusText: string
    data: {
        data: Array<buildListData>
    }
}

export type historyPropsType = {
    contentData: Array<cardPropsType>
}


export type BuildFormType = {
    title?: string
    description?: string
    closeBuildForm: () => void
    addBuild: (value: { commitHash: string }) => void
}

export type buildFieldsType = {
    closeBuildForm: () => void
    addBuild: (value: {
        commitHash: string;
    }) => void
}


// типизация для state
type reducersType = typeof reducers
export type appStateType = ReturnType<reducersType>

// типизация для action creators
type propertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends {
    [key: string]
    : (...args: any[]) => any
}> = ReturnType<propertiesTypes<T>>

// типизация для thunc creators
export type BaseThunkType<A extends Action, R = void>
    = ThunkAction<R, appStateType, unknown, A>

export type buildListData = {
    authorName: string
    branchName: string
    buildNumber: number
    commitHash: string
    commitMessage: string
    configurationId: string
    id: string
    status: string
}

export type getBuildsListType = {
    statusText: string
    data: {
        data: Array<buildListData>
    }
}

export type confDataType = {
    repoName: string,
    buildCommand: string,
    mainBranch: string,
    period: number,
}

export type getSettingConfType = {
    statusText: string
    data: {
        data: confDataType
    }
}

export type getBuildsLogsType = {
    data: string
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
export type postSettingType = {
    res: {
        data: string
    }
}

export type getBuildDeteilsType = {
    data: {
        id: string
        configurationId: string
        buildNumber: number
        commitMessage: string
        commitHash: string
        branchName: string
        authorName: string
        status: string
        start: string
        duration: number
    }
}
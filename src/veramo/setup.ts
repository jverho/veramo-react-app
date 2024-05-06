import { createAgent, IResolver } from '@veramo/core'

import { DIDResolverPlugin } from '@veramo/did-resolver'
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'

// You will need to get a project ID from infura https://www.infura.io
const INFURA_PROJECT_ID = 'a39e8c6e506d44bb949aba0353cacabd'

export const agent = createAgent<IResolver>({
    plugins: [
        new DIDResolverPlugin({
            ...ethrDidResolver({ infuraProjectId: INFURA_PROJECT_ID }),
            ...webDidResolver(),
        }),
    ],
})
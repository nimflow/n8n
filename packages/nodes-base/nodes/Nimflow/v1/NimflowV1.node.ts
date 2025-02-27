import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
} from 'n8n-workflow';

import { versionDescription } from './actions/versionDescription';
import { router } from './actions/router';

export class NimflowV1 implements INodeType {

	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			...versionDescription,
		};
	}

	async execute(this: IExecuteFunctions) {
		return await router.call(this);
	}
}

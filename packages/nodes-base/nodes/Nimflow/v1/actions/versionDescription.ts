import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';
import { taskDependencyFields } from '../../../ClickUp/TaskDependencyDescription';

import * as context from './context';
import * as task from './task';
import * as fn from './function';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Nimflow',
	name: 'nimflow',
	icon: 'file:nimflow.svg',
	group: ['transform'],
	version: 1,
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Consume Nimflow API',
	defaults: {
			name: 'Nimflow',
			color: '#1A82e2',
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: [
		{
			name: 'nimflowApi',
			required: true,
		},
	],
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
					{
							name: 'Context',
							value: 'context',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'Function',
						value: 'function',
					},
			],
			default: 'context',
			required: true,
		},
		...context.descriptions,
		...task.descriptions,
		...fn.descriptions,
	],
};

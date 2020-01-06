/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';

const { name } = metadata;

export { metadata, name };

const edit = () => {
	return (
		<input type="text" />
	);
};

const save = () => {
	return 'Hello World';
};

export const settings = {
	title: __( 'Mega Headings' ),
	description: __( '' ),
	icon: 'heading',
	edit,
	save,
};

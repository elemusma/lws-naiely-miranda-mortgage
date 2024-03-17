/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';

import { PanelBody, Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const {repeaterItems} = attributes;

	const addItem = () => {
		const updatedItems = [...repeaterItems,{}];
		setAttributes({repeaterItems:updatedItems});
	};

	const removeItems = index => {
		const updatedItems = [...repeaterItems];
		updatedItems.splice(index, 1);
		setAttributes({repeaterItems: updatedItems});
	}
	return (
		<>
		<InspectorControls>
				<PanelBody title={__('Repeater Items')} initialOpen={true}>
					{repeaterItems.map((item, index) => (
						<PanelBody key={index} title={__('Item ') + (index + 1)}>
							<Button onClick={() => removeItem(index)}>
								{__('Remove Item')}
							</Button>
							{/* Add your controls for each repeater item */}
						</PanelBody>
					))}
					<Button onClick={addItem}>{__('Add Item')}</Button>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()}>
				<InnerBlocks
					template={repeaterItems.map(() => ['multiple-columns'])}
					templateLock={false}
				/>
			</section>
		</>
	);
}

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
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, __experimentalInputControl as InputControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

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
export default function Edit({ attributes, setAttributes }) {
	const { section_style, section_class, section_id, container_style, container_class, container_id, row_style, row_class, row_id, col_style, col_class, col_id } = attributes;

	const [value, setValue] = useState('');
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Section Attributes')} initialOpen={false}>
					<InputControl
						label="Section Style"
						value={section_style}
						onChange={(nextValue) => setAttributes({ section_style: nextValue })}
					/>
					<InputControl
						label="Section Class"
						value={section_class}
						onChange={(nextValue) => setAttributes({ section_class: nextValue })}
					/>
					<InputControl
						label="Section ID"
						value={section_id}
						onChange={(nextValue) => setAttributes({ section_class: nextValue })}
					/>
				</PanelBody>
				<PanelBody title={__('Container Attributes')} initialOpen={false}>
					<InputControl
						label="Container Section Style"
						value={container_style}
						onChange={(nextValue) => setAttributes({ container_style: nextValue })}
					/>
					<InputControl
						label="Container Section Class"
						value={container_class}
						onChange={(nextValue) => setAttributes({ container_class: nextValue })}
					/>
					<InputControl
						label="Container Section ID"
						value={container_id}
						onChange={(nextValue) => setAttributes({ container_id: nextValue })}
					/>
				</PanelBody>
				<PanelBody title={__('Row Attributes')} initialOpen={false}>
					<InputControl
						label="Row Style"
						value={row_style}
						onChange={(nextValue) => setAttributes({ row_style: nextValue })}
					/>
					<InputControl
						label="Row Class"
						value={row_class}
						onChange={(nextValue) => setAttributes({ row_class: nextValue })}
					/>
					<InputControl
						label="Row ID"
						value={row_id}
						onChange={(nextValue) => setAttributes({ row_id: nextValue })}
					/>
				</PanelBody>
				<PanelBody title={__('Column Attributes')} initialOpen={false}>
					<InputControl
						label="Column Style"
						value={col_style}
						onChange={(nextValue) => setAttributes({ col_style: nextValue })}
					/>
					<InputControl
						label="Column Class"
						value={col_class}
						onChange={(nextValue) => setAttributes({ col_class: nextValue })}
					/>
					<InputControl
						label="Column ID"
						value={col_id}
						onChange={(nextValue) => setAttributes({ col_id: nextValue })}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()}>
				<p>
					{__('Content Block – hello from the editor! this is the editor', 'content-block')}
				</p>
			</section>
		</>
	);
}

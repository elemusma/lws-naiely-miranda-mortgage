/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	return (
		<section className={attributes.section_class} style={attributes.section_style} id={attributes.section_id}>
			<div className={attributes.container_class} style={attributes.container_style} id={attributes.container_id}>
				<div className={attributes.row_class} style={attributes.row_style} id={attributes.row_id}>
					<div className={attributes.col_class} style={attributes.col_style} id={attributes.col_id}>
						<p>
							{'Content Block – hello from the saved content!'}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

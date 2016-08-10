var PanelElementsElementView;

PanelElementsElementView = Marionette.ItemView.extend( {
	template: '#tmpl-elementor-element-library-element',

	className: 'elementor-element-wrapper',

	onRender: function() {
		var self = this;

		this.$el.html5Draggable( {

			onDragStart: function() {
				elementor.panelElements
					.reply( 'element:selected', self )
					.trigger( 'element:drag:start' );
			},


			groups: [ 'elementor-element' ]
		} );
	}
} );

module.exports = PanelElementsElementView;

export class MathLiveEditor {
	constructor( element, value = '' ) {
		if ( typeof MathLive !== 'undefined' ) {
			if ( element.firstChild ) {
				element.removeChild( element.firstChild );
			}

			// eslint-disable-next-line no-undef
			this._mfe = new MathLive.MathfieldElement();

			if ( value ) {
				this.value = value;
			}

			element.appendChild( this._mfe );
		}
	}

	get value() {
		return this._mfe.getValue( 'latex' );
	}

	set value( value ) {
		this._mfe.setValue( value,
			{
				feedback: false,
				focus: false,
				format: 'latex',
				insertionMode: 'replaceAll',
				mode: 'latex',
				resetStyle: true,
				selectionMode: 'after',
				smartFence: 'false',
				suppressChangeNotifications: true
			}
		);
	}
}

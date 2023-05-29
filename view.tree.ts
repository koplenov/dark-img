namespace $.$$ {
	export class $dark extends $.$dark {
		@$mol_mem
		picture_info() {
			return $mol_fetch.json( this.src() ) as any
		}
		img_src() {
			return this.picture_info().thumbnail
		}
		img_width() {
			return Number( this.picture_info().size.split( 'x' )[ 0 ] )
		}
		img_height() {
			return Number( this.picture_info().size.split( 'x' )[ 1 ] )
		}

		avatar_src() {
			return this.picture_info().picture
		}
		avatar_nickname() {
			return this.picture_info().nickname
		}

		createdAt() {
			return ( new $mol_time_moment( this.picture_info().createdAt ) ).toString( 'YYYY-MM-DD hh:mm (WeekDay)' )
		}
	}
}

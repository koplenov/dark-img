namespace $.$$ {
	export class $dark extends $.$dark {
		@$mol_mem
		picture_info(){
			return $mol_fetch.json(this.src())
		}
		img_src() {
			return this.picture_info().src
		}
		img_width(){
			return Number(this.picture_info().size.split('x')[0])
		}
		img_height(){
			return Number(this.picture_info().size.split('x')[1])
		}
	}
}

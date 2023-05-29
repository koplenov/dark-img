namespace $.$$ {
	export class $dark extends $.$dark {
		@$mol_mem
		picture_info(){
			return $mol_fetch.json(this.src())
		}
		img_src() : string {
			return this.picture_info().src as string
		}
		img_width(){
			return this.picture_info().size.split('x')[0]
		}
		img_height(){
			return this.picture_info().size.split('x')[1]
		}
	}
}

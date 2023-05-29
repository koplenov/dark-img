namespace $.$$ {
	export class $dark extends $.$dark {
		@$mol_mem
		picture_info(){
			return $mol_fetch.json(this.src()) as any
		}
		img_src() {
			return this.picture_info().thumbnail
		}
		img_width(){
			return Number(this.picture_info().size.split('x')[0])
		}
		img_height(){
			return Number(this.picture_info().size.split('x')[1])
		}
	}
}

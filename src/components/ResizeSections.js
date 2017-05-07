const TR_ROW_HEIGHT = 23;
const HEADER_HEIGHT = 160;
const MAX_TABLE_HEIGHT = 150;

export default function ResizeSections(numOfItemsOnTable){
	
	let userInputDom = document.getElementById('user_input_section');
	let photosSectionDom = document.getElementById('photos_section'); 

	if(userInputDom){	

		let tableHeight = TR_ROW_HEIGHT * numOfItemsOnTable;
		let inputHeight = HEADER_HEIGHT + Math.min(tableHeight, MAX_TABLE_HEIGHT);
		let heightInPX = inputHeight + 'px';

		userInputDom.style.height = heightInPX; 

		if(photosSectionDom){

			photosSectionDom.style.marginTop = heightInPX;
		}
	}	
}
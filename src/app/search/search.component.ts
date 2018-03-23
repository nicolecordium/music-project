import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: `./search.component.html`,
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	searchFormGroup: FormGroup;
	@Output() searchTermSubmit: EventEmitter<string> = new EventEmitter<string>();

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit () {
		this.searchFormGroup = this.formBuilder.group({
			textInput: new FormControl('Kanye', [Validators.required])
		});
	}

	emitSearchTerm() {
		this.searchTermSubmit.emit(this.searchFormGroup.value.textInput);
	}
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService, EventsService } from './services';
import { EventDataComponent } from './event-data/event-data.component';
import { EventVisualizationComponent } from './event-visualization/event-visualization.component';

@NgModule({
	declarations: [
		AppComponent,
		SearchComponent,
		SearchResultsComponent,
		EventDataComponent,
		EventVisualizationComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpModule,
		HttpClientModule
	],
	providers: [
		SearchService,
		EventsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

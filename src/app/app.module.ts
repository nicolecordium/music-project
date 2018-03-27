import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService, EventsService, VisualizationService } from './services';
import { EventDataComponent } from './event-data/event-data.component';
import { EventVisualizationComponent } from './event-visualization/event-visualization.component';
import { NodeVisualComponent } from './node-visual/node-visual.component';
import { LinkVisualComponent } from './link-visual/link-visual.component';
import { ZoomableDirective } from './directives/zoomable.directive';
import { DraggableDirective } from './directives/draggable.directive';

@NgModule({
	declarations: [
		AppComponent,
		SearchComponent,
		SearchResultsComponent,
		EventDataComponent,
		EventVisualizationComponent,
		NodeVisualComponent,
		LinkVisualComponent,
		ZoomableDirective,
		DraggableDirective
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpModule,
		HttpClientModule
	],
	providers: [
		SearchService,
		EventsService,
		VisualizationService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

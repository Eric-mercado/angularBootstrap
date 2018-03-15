import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ArtistItemsComponent } from './artist-items/artist-items.component';
import { SearchArtistPipe } from './search-artist.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArtistItemsComponent,
    SearchArtistPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

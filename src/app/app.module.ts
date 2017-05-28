import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

// import services
import {FoodCategoryService} from '../services/food-category-service';
import {FoodService} from '../services/food-service';
import {GatewayService} from '../services/gateway-service';
import {HotelService} from '../services/hotel-service';
import {RestaurantService} from '../services/restaurant-service';
import {AttractionService} from '../services/attraction-service';
// end import services
// end import services

// import pages
import { AttractionDetailPage} from '../pages/attraction-detail/attraction-detail';
import { AttractionsPage} from '../pages/attractions/attractions';
import { HomePage} from '../pages/home/home';
import { HotelDetailPage} from '../pages/hotel-detail/hotel-detail';
import { HotelsPage} from '../pages/hotels/hotels';
import { MainTabsPage} from '../pages/main-tabs/main-tabs';
import { ModalFilterPage} from '../pages/modal-filter/modal-filter';
import { RestaurantDetailPage} from '../pages/restaurant-detail/restaurant-detail';
import { RestaurantsPage} from '../pages/restaurants/restaurants';
import { SearchPage} from '../pages/search/search';
// end import pages

@NgModule({
  declarations: [
    MyApp,
    AttractionDetailPage,
    AttractionsPage,
    HomePage,
    HotelDetailPage,
    HotelsPage,
    MainTabsPage,
    ModalFilterPage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchPage,
],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AttractionDetailPage,
    AttractionsPage,
    HomePage,
    HotelDetailPage,
    HotelsPage,
    MainTabsPage,
    ModalFilterPage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchPage,
],
  providers: [
    FoodCategoryService,
    FoodService,
    GatewayService,
    HotelService,
    RestaurantService,
    AttractionService,
    /* import services */
]
})
export class AppModule {}

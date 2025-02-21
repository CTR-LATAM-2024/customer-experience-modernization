/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
interface Data {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-marketing-insights',
  templateUrl: './marketing-insights.component.html',
  styleUrl: './marketing-insights.component.scss'
})
export class MarketingInsightsComponent {
   selectedname: any ;
  userLoggedIn: boolean = false;
  showchatboot: boolean = false;
  overview: boolean = false
  photoURL: string | undefined;
  subscription: Subscription | undefined;
  selectedObject: any
  showOverview: any
  webTraffic: boolean = false
  storePerformance:boolean = false;
  campaignPerformance:boolean = false;
  campaignComparison:boolean = false;
  productPerformance:boolean = false;
  propensitytoPurchasePredictions:boolean = false;
  customerLifetimeValue:boolean = false;
  demandForecasting:boolean = false;
  sentimentAnalysis:boolean = false;
  audienceRegistry:boolean = false;
  productAvailabilityDetailedView:boolean = false;
  predictedUserLTVRevenueDetailedView:boolean = false;
  PurchasePredictionDetailedView:boolean = false;
  ProductDataDetailedView: boolean = false
  constructor( public loginService: LoginService) {
    this.subscription = this.loginService.getUserDetails().subscribe(res => {
      this.userLoggedIn = true;
      this.photoURL = res?.photoURL
    });
  }
  
  datas = [
    {value: 'Overview', viewValue: 'Overview'},
    {value: 'Web Traffic', viewValue: 'Web Traffic'},
    {value: 'Store Performance', viewValue: 'Store Performance'},
    {value: 'Campaign Performance', viewValue: 'Campaign Performance'},
    {value: 'Campaign Comparison', viewValue: 'Campaign Comparison'},
    {value: 'Product Performance', viewValue: 'Product Performance'},
    {value: 'Propensity to Purchase Predictions', viewValue: 'Propensity to Purchase Predictions'},
    {value: 'Customer Lifetime Value', viewValue: 'Customer Lifetime Value'},
    {value: 'Demand Forecasting', viewValue: 'Demand Forecasting'},
    {value: 'Sentiment Analysis', viewValue: 'Sentiment Analysis'},
    {value: 'Audience Registry', viewValue: 'Audience Registry'},
    {value: 'Product Availability-Detailed View', viewValue: 'Product Availability-Detailed View'},
    {value: 'Predicted User LTV Revenue-Detailed View', viewValue: 'Predicted User LTV Revenue-Detailed View'},
    {value: 'Purchase Prediction-Detailed View', viewValue: 'Purchase Prediction-Detailed View'},
    {value: 'Product Data-Detailed View', viewValue: 'Product Data-Detailed View'},
  ];

  onClickMarketingAssi() {
    this.showchatboot = true
  }

  onClick(selectedValue : any) {
    if(selectedValue === 'Overview'){
     this.overview =true;
     this.webTraffic =false;
     this.storePerformance =false;
     this.campaignPerformance = false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    } else if(selectedValue === 'Web Traffic'){
      this.overview =false;
      this.webTraffic =true;
     this.storePerformance =false;
     this.campaignPerformance = false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    } else if(selectedValue === 'Store Performance'){
      this.storePerformance =true;
      this.overview =false;
      this.webTraffic =false;
     this.campaignPerformance = false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    } else if(selectedValue === 'Campaign Performance'){
      this.campaignPerformance =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    }
    else if(selectedValue === 'Campaign Comparison'){
      this.campaignComparison =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    }
    else if(selectedValue === 'Product Performance'){
      this.productPerformance =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.campaignComparison = false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    }
    else if(selectedValue === 'Propensity to Purchase Predictions'){
      this.propensitytoPurchasePredictions =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    }
    else if(selectedValue === 'Customer Lifetime Value'){
      this.customerLifetimeValue =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    }
    else if(selectedValue === 'Demand Forecasting'){
      this.demandForecasting =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    }
    else if(selectedValue === 'Sentiment Analysis'){
      this.sentimentAnalysis =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    }
    else if(selectedValue === 'Audience Registry'){
      this.audienceRegistry =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    }
    else if(selectedValue === 'Product Availability-Detailed View'){
      this.productAvailabilityDetailedView =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    }
    else if(selectedValue === 'Predicted User LTV Revenue-Detailed View'){
      this.predictedUserLTVRevenueDetailedView =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.PurchasePredictionDetailedView =false;
     this.ProductDataDetailedView =false;
    }
    else if(selectedValue === 'Purchase Prediction-Detailed View'){
      this.PurchasePredictionDetailedView =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.ProductDataDetailedView =false;
    }
    else if(selectedValue === 'Product Data-Detailed View'){
      this.ProductDataDetailedView =true;
      this.overview =false;
      this.webTraffic =false;
     this.storePerformance =false;
     this.campaignComparison = false;
     this.productPerformance =false;
     this.propensitytoPurchasePredictions =false;
     this.customerLifetimeValue =false;
     this.demandForecasting =false;
     this.sentimentAnalysis =false;
     this.audienceRegistry =false;
     this.productAvailabilityDetailedView =false;
     this.predictedUserLTVRevenueDetailedView =false;
     this.PurchasePredictionDetailedView =false;
    }

  }
}

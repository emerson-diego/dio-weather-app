import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Weather } from '../../models/weather.model';
import { Units } from '../../models/units.enum';
import { unitToSymbol } from '../../utils/units.utils';

import {
  faTemperatureHigh,
  faTint,
  faWind,
  faThermometerHalf
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jv-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent {

  @Input() weather: Weather;
  @Input() unit: Units;

  faTemperatureHigh = faTemperatureHigh;
  faTint = faTint;
  faWind = faWind;
  faThermometerHalf = faThermometerHalf;

  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${ this.weather.icon }@2x.png`;
  }

  get unitSymbol(): string {
    return unitToSymbol(this.unit);
  }
}

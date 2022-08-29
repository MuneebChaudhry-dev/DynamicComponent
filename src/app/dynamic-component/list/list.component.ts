import {
  Component,
  ComponentRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CoffeComponent } from 'src/app/coffe/coffe.component';
import { GymComponent } from 'src/app/gym/gym.component';
import { LaptopComponent } from 'src/app/laptop/laptop.component';
import { MobileComponent } from 'src/app/mobile/mobile.component';
import { MusicComponent } from 'src/app/music/music.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  components = new Map<string, ComponentRef<any>>();
  index: number = 0;

  ProductsName: any = {
    laptop: 'laptop',
    mobile: 'mobile',
    coffe: 'coffe',
    music: 'music',
    gym: 'gym',
  };
  constructor() {}
  ngOnInit(): void {}

  createComponent(componentName: string) {
    const componentType = this.getComponentType(componentName);
    let uniqueName = componentName + '-' + this.index.toString();
    const component = this.container.createComponent(componentType);
    component.instance.name = uniqueName;
    component.instance.closed.subscribe((res: any) => {
      this.deleteComponent(res.name);
    });
    this.components.set(uniqueName, component);
    this.index++;
  }
  getComponentType(name: string): Type<any> {
    let type: Type<any> = LaptopComponent;
    switch (name) {
      case this.ProductsName.laptop:
        type = LaptopComponent;
        break;
      case this.ProductsName.mobile:
        type = MobileComponent;
        break;
      case this.ProductsName.coffe:
        type = CoffeComponent;
        break;
      case this.ProductsName.music:
        type = MusicComponent;
        break;
      case this.ProductsName.gym:
        type = GymComponent;
        break;
    }
    return type;
  }

  deleteComponent(componentName: string) {
    if (this.components.has(componentName)) {
      this.components.get(componentName)?.destroy();
      this.components.delete(componentName);
    }
  }
}

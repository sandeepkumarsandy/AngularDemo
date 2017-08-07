import { Component, TemplateRef } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid'; 
import { products } from './data';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-void-management',
  templateUrl: './void-management.component.html',
  styleUrls: ['./void-management.component.css'],
  //template:'<kendo-grid [data]="gridView" [pageSize]="pageSize" [skip]="skip" [pageable]="{buttonCount: buttonCount,pageSizes: pageSizes}" [height]="400" (pageChange)="pageChange($event)"[sortable]="{allowUnsort: allowUnsort}" [sort]="sort"(sortChange)="sortChange($event)"><kendo-grid-column field="id" title="ID" ></kendo-grid-column><kendo-grid-column field="name" title="Name"></kendo-grid-column><kendo-grid-column field="location" title="Location"></kendo-grid-column><kendo-grid-column field="void_type" title="Void Type"></kendo-grid-column><kendo-grid-column field="void_start_date" title="Void Start Date"></kendo-grid-column><kendo-grid-column field="void_end_date" title="Void End Date" ></kendo-grid-column><kendo-grid-column field="void_type_start_date" title="Void Type Start Date" ></kendo-grid-column><kendo-grid-column field="void_type_end_date" title="Void Type End Date" ></kendo-grid-column></kendo-grid>'

})

export class VoidManagementComponent {
public multiple: boolean = false;
showHide:boolean;
    public allowUnsort: boolean = true;
private date: Date;
    private gridView: GridDataResult;
    private data: Object[];
    private pageSize: number = 10;
    private pageSizes: any[] = [10,25,50];
    private skip: number = 0;
    private buttonCount: number =  3;
    private info: boolean = true;
    private items: any[] = products;
    private sort: SortDescriptor[] = [];

    constructor() {
        this.loadItems();
    }

    protected pageChange({ skip, take }: PageChangeEvent): void {
        this.skip = skip;
        this.pageSize = take;
        this.loadItems();
    }
protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }
    private loadItems(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }

     private loadProducts(): void {
        this.gridView = {
            data: orderBy(this.items, this.sort),
            total: this.items.length
        };
    }
    model:any={};
    addItems(){
        this.model.void_type_end_date | Date['d/m/yyyy'];
        this.items.push(this.model);
        this.model = {};
        this.loadItems();
    }

    removeItems(i){
        this.items.splice(i,1);
        this.loadItems();
    }
    edit() {
              alert("Fields Updated Successfully !!");
          }
  }

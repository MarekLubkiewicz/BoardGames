import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public title!: string;
  private activatedRoute = inject(ActivatedRoute);
  public actionSheetCtrl = inject(ActionSheetController);
  constructor() { }

  ngOnInit() {
    // pobranie parametru 'title' z queryParams
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title') as string;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => console.log('Destructive clicked'),
          },
        {
          text: 'Archive',
          handler: () => console.log('Archive clicked'),
          },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Cancel clicked'),
          },
      ],
    });

    await actionSheet.present();
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {retry, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;


  constructor() {

   this.subcription =  this.regresaObservable().subscribe(numero => {
      console.log('Sub' , numero);
    }, error => {
      console.error('Error en el subs' , error);
    }, () => console.log('El observador termino!'));

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {

    console.log('Cierra pagina');

    this.subcription.unsubscribe();
  }

  regresaObservable(): Observable<number> {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return new  Observable( observer => {

      let contador = 1;

      const intervalo = setInterval(() => {
        contador += 1;
        const salida = {
          valor: contador
        };
        observer.next(salida);

      /*  if ( contador === 3) {
          clearInterval( intervalo);
          observer.complete();
        }*/
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
           if ( (valor % 2 ) === 1) {
             return true;
           } else {

           }

      })

    );
  }

}

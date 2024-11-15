import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs'
import { Tirage } from '../Component/Models/Tout.Model'

@Injectable({
  providedIn: 'root'
})
export class TirageService {
  private readonly apiUrl = 'http://localhost:8000/api/tirages'

  constructor (private http: HttpClient) {}

  // Obtenir tous les tirages ou filtrer par compétition ID
  getTirages (competitionId?: number): Observable<Tirage[]> {
    let url = this.apiUrl
    if (competitionId) {
      url += `?competition_id=${competitionId}`
    }
    return this.http
      .get<Tirage[]>(url, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError))
  }

  // Lancer un tirage de poules
  lancerTirage (data: {
    competition_id: number
    phase: string
    nombre_poules: number
  }): Observable<Tirage> {
    return this.http
      .post<Tirage>(`${this.apiUrl}/lancer`, data, {
        headers: this.getHeaders()
      })
      .pipe(catchError(this.handleError))
  }

  // Obtenir les en-têtes pour les requêtes HTTP
  private getHeaders (): HttpHeaders {
    const token = localStorage.getItem('access_token')
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
  }

  // Gestion des erreurs
  private handleError (error: any): Observable<never> {
    console.error("Une erreur s'est produite:", error)
    return throwError(
      () => new Error('Une erreur est survenue; veuillez réessayer plus tard.')
    )
  }
}

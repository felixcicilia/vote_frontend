import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface UploadedFile {
  id: number;
  url: string;
  mimeType: string;
  originalName: string;
  size: number;
}

@Injectable({ providedIn: 'root' })
export class FilesService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/files`;

  /** Full absolute URL for a stored file */
  absoluteUrl(relativeUrl: string): string {
    if (!relativeUrl) return '';
    if (relativeUrl.startsWith('http')) return relativeUrl;
    // relativeUrl = "/api/files/5"  →  "http://localhost:3000/api/files/5"
    const apiBase = environment.apiUrl.replace('/api', '');
    return `${apiBase}${relativeUrl}`;
  }

  upload(file: File): Observable<UploadedFile> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<UploadedFile>(`${this.base}/upload`, fd);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.base}/${id}`);
  }
}

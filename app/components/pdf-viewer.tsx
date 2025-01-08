'use client'

import { useState, useEffect } from 'react'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import '../../lib/pdf-worker'

interface PDFViewerProps {
  pdfUrl: string
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [windowWidth, setWindowWidth] = useState(800)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const setWidth = () => {
      const width = window.innerWidth
      setWindowWidth(width)
    }

    setWidth()
    window.addEventListener('resize', setWidth)
    return () => window.removeEventListener('resize', setWidth)
  }, [])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
    setError(null)
  }

  function onDocumentLoadError(error: Error) {
    console.error('PDF load error:', error)
    setError('Failed to load PDF. Please try again later.')
    setLoading(false)
  }

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )

  if (error) {
    return (
      <div className="flex items-center justify-center p-8 text-red-500">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center h-[80vh] max-h-[80vh]">
      <div className="flex-1 w-full overflow-y-auto">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<LoadingSpinner />}
          className="flex flex-col items-center w-full"
          error={
            <div className="flex items-center justify-center p-8 text-red-500">
              <p>Failed to load PDF. Please try again later.</p>
            </div>
          }
        >
          {loading ? (
            <LoadingSpinner />
          ) : (
            Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                className="max-w-full shadow-lg mb-4"
                width={Math.min(windowWidth * 0.8, 800)}
                loading={<LoadingSpinner />}
                error={null}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))
          )}
        </Document>
      </div>
    </div>
  )
} 
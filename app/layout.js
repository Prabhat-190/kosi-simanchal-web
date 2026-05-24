import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'Kosi Simanchal Construction Pvt. Ltd.',
  description: 'Excellence in Civil Engineering & Construction in Bihar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Premium Corporate Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        
        {/* Icon Libraries */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        {children}
        {/* Bootstrap Interactivity */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  );
}
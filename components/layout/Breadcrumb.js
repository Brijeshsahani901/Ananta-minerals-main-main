import Link from "next/link";

export default function Breadcrumb({
  breadcrumbCategory,
  breadcrumbPostTitle,
}) {
  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '15px 0',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px'
      }}>
        <nav aria-label="breadcrumb">
          <ol style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: 0,
            padding: 0,
            listStyle: 'none',
            fontSize: '14px'
          }}>
            <li>
              <Link href="/" style={{
                color: '#007bff',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Home
              </Link>
            </li>
            
            {breadcrumbCategory && (
              <>
                <li style={{ color: '#6c757d' }}>/</li>
                <li>
                  <Link href="#" style={{
                    color: '#007bff',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    {breadcrumbCategory}
                  </Link>
                </li>
              </>
            )}

            {breadcrumbPostTitle && (
              <>
                <li style={{ color: '#6c757d' }}>/</li>
                <li style={{ color: '#495057' }} aria-current="page">
                  {breadcrumbPostTitle}
                </li>
              </>
            )}
          </ol>
        </nav>
      </div>
    </div>
  );
}
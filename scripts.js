<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Carrusel de Joan Sebastian</title>
  <!-- Incluir Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Incluir Bootstrap Icons -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
 
  
  
</head>

<body>
  <!-- Navegación principal -->
  <nav class="vertical-nav">
    <ul>
      <li><a href="index.html"><i class="bi bi-house-door me-2"></i> Inicio</a></li>
      <li><a href="biografia.html"><i class="bi bi-person me-2"></i> Biografía</a></li>
      <li><a href="discografia.html"><i class="bi bi-music-note me-2"></i> Discografía</a></li>
      <li><a href="galeria.html"><i class="bi bi-images me-2"></i> Galería</a></li>
    </ul>
  </nav>

  <!-- Contenido principal -->
  <main class="main-content">
    <!-- Carrusel de imágenes -->
    <section class="hero-section">
      <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
        <!-- Indicadores -->
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <!-- Contenido del carrusel -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="imagenes/JOAN-SEVASTIAN.jpg" class="d-block w-100" alt="Imagen 1">
            <div class="carousel-caption d-none d-md-block">
              <h5>Joan Sebastian</h5>
              <p>Una leyenda de la música.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="imagenes/2.png" class="d-block w-100" alt="Imagen 2">
            <div class="carousel-caption d-none d-md-block">
              <h5>Concierto Inolvidable</h5>
              <p>Momentos memorables en el escenario.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="imagenes/3.jpg" class="d-block w-100" alt="Imagen 3">
            <div class="carousel-caption d-none d-md-block">
              <h5>Entrevista Exclusiva</h5>
              <p>Conociendo más de cerca al artista.</p>
            </div>
          </div>
        </div>

        <!-- Controles del carrusel -->
        <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  </main>

  <!-- Pie de página -->
  <footer class="py-2">
    <div class="container text-center">
      <p>&copy; <span id="year"></span> Joan Sebastian. Todos los derechos reservados.</p>
    </div>
  </footer>

  <!-- Incluir Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // Actualizar el año automáticamente
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>

</html>

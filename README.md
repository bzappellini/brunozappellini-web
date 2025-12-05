# Personal Website

Proyecto de sitio personal construido con Next.js 16, React 19 y TailwindCSS.

## 🧱 Stack
- Next.js (App Router)
- React 19
- TailwindCSS
- Radix UI + componentes personalizados
- pnpm como gestor de paquetes

## 🚀 Ejecución local (sin Docker)
```bash
pnpm install
pnpm dev
```
Visita: http://localhost:3000

Build de producción local:
```bash
pnpm build
pnpm start
```

## 🐳 Docker
Incluye un `Dockerfile` multi-stage optimizado.

### Construir imagen
```bash
docker build -t personal-website:latest .
```

Si el build falla por `ERR_PNPM_OUTDATED_LOCKFILE`, puedes forzar instalación sin modo estricto:

```bash
docker build --build-arg FROZEN_LOCKFILE=false -t personal-website:latest .
```

Luego actualiza tu lockfile local ejecutando:

```bash
pnpm install
```

Y repite el build con modo estricto nuevamente:

```bash
docker build -t personal-website:latest .
```

### Ejecutar contenedor
```bash
docker run --rm -p 3000:3000 personal-website:latest
```

### Docker Compose
Se proporciona `docker-compose.yml` para simplificar.

Levantar servicios:
```bash
docker compose up --build -d
```
Ver logs:
```bash
docker compose logs -f web
```
Detener:
```bash
docker compose down
```

## 🧩 Variables de entorno
Coloca tus variables en un archivo `.env` (no se copia dentro de la imagen por seguridad). Para Docker Compose puedes inyectarlas usando un archivo `.env` al mismo nivel del compose o agregando clave/valor en `environment:`.

Ejemplo:
```yaml
environment:
  NODE_ENV: production
  NEXT_PUBLIC_API_URL: "https://api.tu-dominio.com"
```

## 🛠 Desarrollo con Docker (opcional)
Para desarrollo en vivo puedes descomentar el bloque `volumes:` en `docker-compose.yml` para montar el código y ejecutar `next dev` modificando el `CMD` en el Dockerfile o creando un segundo servicio dev.

Ejemplo rápido:
```yaml
services:
  web-dev:
    build: .
    command: ["node", "node_modules/next/dist/bin/next", "dev", "-p", "3000"]
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "3000:3000"
```

## 📂 Estructura relevante
```
app/            # Rutas y layout principal
components/     # Componentes UI y secciones del sitio
hooks/          # Hooks reutilizables
lib/            # Utilidades
styles/         # Estilos globales
public/         # Assets estáticos
```

## 🔒 Seguridad y buenas prácticas
- No incluyas `.env` dentro de la imagen final.
- Usa usuario no root (aplicado en el Dockerfile).
- Activa `restart: unless-stopped` en producción.
- Añade un reverse proxy (Nginx / Traefik) para TLS y caching si lo necesitas.

## 📈 Optimización futura
- Añadir análisis de bundle (`next build --analyze`).
- Implementar imágenes optimizadas si se habilita hosting compatible.
- Cache de dependencias más fina usando `turbo` o similar.

## ✅ Healthcheck
El `docker-compose.yml` incluye un healthcheck simple usando `wget` contra `/`.

## 🧪 Test (pendiente)
Puedes agregar una carpeta `__tests__` y ejecutarlos con tu framework preferido (Jest / Vitest). Actualmente no incluido.

## 🔁 Reproducibilidad de dependencias
Se fija la versión de pnpm mediante el campo `packageManager` en `package.json` (`pnpm@10.23.0`). Para builds deterministas mantén el lockfile actualizado y usa `FROZEN_LOCKFILE=true` (valor por defecto). Si incorporas nuevas dependencias recuerda:

```bash
pnpm add <paquete>
pnpm install
git add pnpm-lock.yaml package.json
```

## 🧾 Licencia
Privado / Uso personal.

---
Cualquier mejora o sugerencia: crea un issue interno o ajusta directamente.

# Étape 1 : Utiliser une image Node.js comme base
FROM node:14 as build

# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers de l'application dans le conteneur
COPY . .

# Étape 4 : Installer les dépendances et construire l'application
RUN npm install
RUN npm run build --prod

# Étape 5 : Utiliser une image légère pour servir l'application
FROM nginx:alpine

# Étape 6 : Copier les fichiers de l'étape de construction dans le conteneur NGINX
COPY --from=build /app/dist/ultima-ng /usr/share/nginx/html

# Étape 7 : Exposer le port 80
EXPOSE 80

# Étape 8 : Commande de démarrage pour NGINX
CMD ["nginx", "-g", "daemon off;"]

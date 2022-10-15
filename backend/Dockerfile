FROM python:3.10

# Create app directory
WORKDIR /app

# Install flask in the current environment (managed by pipenv)
RUN pip install pipenv
RUN pipenv install flask

# Copy everythng from outside to /app
COPY . .

# Install all dependencies like defined in Pipfile.lock
RUN pipenv sync

EXPOSE 5000
CMD [ "pipenv", "run", "flask", "run","--host","0.0.0.0", "--port","5000"]
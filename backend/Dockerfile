FROM python:3.10

# Add users bin directory to the directories that
# are scanned for executable files.
# pipenv is installed there
ENV PATH="$PATH:/root/.local/bin/"

# Create app directory
WORKDIR /app

# Install flask in the current environment (managed by pipenv)
RUN pip install pipenv
RUN pipenv install flask

# Copy everythng from outside to /app
COPY backend/ .

# Install all dependencies like defined in Pipfile.lock
RUN pipenv sync

EXPOSE 5000
CMD [ "pipenv", "run", "flask", "run","--host","0.0.0.0", "--port","5000"]
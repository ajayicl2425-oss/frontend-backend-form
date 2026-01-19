FROM python:3.11-slim-buster

WORKDIR /app

ADD requirements.txt /app/requirements.txt

RUN pip install -r /app/requirements.txt

COPY . .

ENTRYPOINT ["python"]

CMD ["app.py"]

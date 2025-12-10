FROM python:3.9-slim-buster

ADD requirements.txt /app/requirements.txt

RUN pip install -r /app/requirements.txt

COPY . .

WORKDIR /app

ENTRYPOINT ["python"]

CMD ["app.py"]

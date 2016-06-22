all:
	gsutil rsync -rd public gs://www.jpvd.xyz
	gsutil web set -m index.html -e 404.html gs://www.jpvd.xyz
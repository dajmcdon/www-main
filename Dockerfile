FROM continuumio/miniconda

ADD ./environment.yml .
RUN conda env create -f environment.yml

ADD ./dependencies.R .

RUN conda run -n www-main Rscript ./dependencies.R
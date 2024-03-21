// const apiKey = "3a6168aa3656c33fd2fd74c482aea94c";
const apiKey1 = '3a6168aa3656c33fd2fd74c482aea94c';

        function getMovieSuggestions() {
            const movieName = document.getElementById('movieName').value.trim();

            if (movieName === '') {
                clearMovieSuggestions();
                return;
            }

            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey1}&query=${encodeURIComponent(movieName)}`)
                .then(response => response.json())
                .then(data => {
                    const movieSuggestionsList = document.getElementById('movieSuggestions');
                    movieSuggestionsList.innerHTML = '';

                    if (data.results && data.results.length > 0) {
                        data.results.slice(0, 5).forEach(result => {
                            const listItem = document.createElement('li');
                            listItem.textContent = result.title;
                            listItem.onclick = function () {
                                document.getElementById('movieName').value = result.title;
                                clearMovieSuggestions();
                            };
                            movieSuggestionsList.appendChild(listItem);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error fetching movie suggestions:', error);
                    clearMovieSuggestions();
                });
        }

        function searchMovie() {
            const movieName = document.getElementById('movieName').value.trim();

            if (movieName === '') {
                alert('Please enter a movie name.');
                return;
            }

            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey1}&query=${encodeURIComponent(movieName)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.results && data.results.length > 0) {
                        const movieId = data.results[0].id;
                        displayMovieResults(movieId);
                    } else {
                        document.getElementById('movieResult').innerHTML = 'Movie not found';
                    }
                })
                .catch(error => {
                    console.error('Error fetching movie data:', error);
                    document.getElementById('movieResult').innerHTML = 'Error fetching movie data';
                });
        }

        function displayMovieResults(movieId) {
            const movieResultElement = document.getElementById('movieResult');
            movieResultElement.innerHTML = '';

            const firstMovieUrl = `https://vidsrc.xyz/embed/movie/${movieId}`;
            const secondMovieUrl = `https://vidsrc.to/embed/movie/${movieId}`;

            createIframeAndLink(movieResultElement, firstMovieUrl);
            createIframeAndLink(movieResultElement, secondMovieUrl);

            document.getElementById('movieCopyButton').disabled = false;
            window.generatedMovieUrl = firstMovieUrl; // Store the URL for copying
        }

        function clearMovieSuggestions() {
            document.getElementById('movieSuggestions').innerHTML = '';
        }

        function createIframeAndLink(parentElement, url) {
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.allowfullscreen = true;

            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.textContent = `Source URL: ${url}`;

            parentElement.appendChild(link);
            parentElement.appendChild(document.createElement('br'));
            parentElement.appendChild(iframe);
            parentElement.appendChild(document.createElement('br'));
        }

        function copyMovieToClipboard() {
            const generatedMovieUrl = window.generatedMovieUrl;

            if (!generatedMovieUrl) {
                console.error('No generated movie URL to copy.');
                return;
            }

            copyToClipboard(generatedMovieUrl);
        }

        function copyToClipboard(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            console.log('URL copied to clipboard:', text);
        }


const apiKey = '3a6168aa3656c33fd2fd74c482aea94c'; // Replace with your TMDb API key

        function getSeriesSuggestions() {
            const seriesName = document.getElementById('seriesName').value.trim();

            if (seriesName === '') {
                clearSeriesSuggestions();
                return;
            }

            fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(seriesName)}`)
                .then(response => response.json())
                .then(data => {
                    const seriesSuggestionsList = document.getElementById('seriesSuggestions');
                    seriesSuggestionsList.innerHTML = '';

                    if (data.results && data.results.length > 0) {
                        data.results.slice(0, 5).forEach(result => {
                            const listItem = document.createElement('li');
                            listItem.textContent = result.name;
                            listItem.onclick = function () {
                                document.getElementById('seriesName').value = result.name;
                                clearSeriesSuggestions();
                            };
                            seriesSuggestionsList.appendChild(listItem);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error fetching series suggestions:', error);
                    clearSeriesSuggestions();
                });
        }

        function searchSeries() {
            const seriesName = document.getElementById('seriesName').value.trim();

            if (seriesName === '') {
                alert('Please enter a series name.');
                return;
            }

            fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(seriesName)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.results && data.results.length > 0) {
                        const seriesId = data.results[0].id;
                        displaySeriesResults(seriesId);
                    } else {
                        document.getElementById('seriesResult').innerHTML = 'Series not found';
                    }
                })
                .catch(error => {
                    console.error('Error fetching series data:', error);
                    document.getElementById('seriesResult').innerHTML = 'Error fetching series data';
                });
        }

        function displaySeriesResults(seriesId) {
            const seriesResultElement = document.getElementById('seriesResult');
            seriesResultElement.innerHTML = '';

            const firstSeriesUrl = `https://vidsrc.xyz/embed/tv/${seriesId}`;
            const secondSeriesUrl = `https://vidsrc.to/embed/tv/${seriesId}`;

            createIframeAndLink(seriesResultElement, firstSeriesUrl);
            createIframeAndLink(seriesResultElement, secondSeriesUrl);

            document.getElementById('seriesCopyButton').disabled = false;
            window.generatedSeriesUrl = firstSeriesUrl; // Store the URL for copying
        }

        function clearSeriesSuggestions() {
            document.getElementById('seriesSuggestions').innerHTML = '';
        }

        function createIframeAndLink(parentElement, url) {
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.allowfullscreen = true;

            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.textContent = `Source URL: ${url}`;

            parentElement.appendChild(link);
            parentElement.appendChild(document.createElement('br'));
            parentElement.appendChild(iframe);
            parentElement.appendChild(document.createElement('br'));
        }

        function copySeriesToClipboard() {
            const generatedSeriesUrl = window.generatedSeriesUrl;

            if (!generatedSeriesUrl) {
                console.error('No generated series URL to copy.');
                return;
            }

            copyToClipboard(generatedSeriesUrl);
        }

        function copyToClipboard(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            console.log('URL copied to clipboard:', text);
        }
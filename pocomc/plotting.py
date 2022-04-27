import numpy as np

def traceplot(results,
              labels=None,
              figure_width=10.0,
              figure_height=3.0,
              kde_bins=200,
              ):

    # import plt and scipy
    import matplotlib.pyplot as plt
    from scipy.stats import gaussian_kde

    # Get samples and log-weights
    samples = results.get("samples")
    logw = results.get("logw")
    beta = results.get("beta")

    # Compute weights
    weights = np.exp(logw-np.max(logw,axis=1)[:,np.newaxis])
    weights /= np.sum(weights, axis=1)[:,np.newaxis]

    # Number of beta values, particles and parameters/dimensions
    n_beta, n_particles, n_dim = np.shape(samples)

    # Set labels if None is provided
    if labels is None:
        labels = [r"$x_{%s}$"%i for i in range(n_dim)]

    # Initialise figure
    fig = plt.figure(figsize=(figure_width, n_dim * figure_height))

    # Loop over parameters/dimensions
    for i in range(n_dim):
        # Left column -- beta plots
        plt.subplot(n_dim, 2, 2 * i + 1)
        for j in range(n_beta):
            plt.scatter(np.full(n_particles, beta[j]),
                        samples[j,:,i],
                        s=5,
                        c='C0',
                        alpha=0.1*weights[j]/np.max(weights[j]))
        plt.xscale('log')
        plt.xlabel(r'$\beta$', fontsize=14)
        plt.ylabel(labels[i], fontsize=14)
        plt.xticks(fontsize=12)
        plt.yticks(fontsize=12)

        # Compute 1D KDE for parameter for beta = 1.0
        kde = gaussian_kde(samples[-1,:,i], weights=weights[-1])
        x = np.linspace(np.min(samples[-1,:,i]), np.max(samples[-1,:,i]), kde_bins)

        # Right column -- trace plots
        plt.subplot(n_dim, 2, 2 * i + 2)
        plt.plot(x, kde(x), c='C0', lw=2.0)
        plt.xlabel(labels[i], fontsize=14)
        plt.ylabel('')
        plt.xticks(fontsize=12)
        plt.yticks([])
    
    plt.tight_layout()
    return fig


def cornerplot(results):

    import corner
    
    #return corner.corner(results.poster)

def runplot(results):
    pass